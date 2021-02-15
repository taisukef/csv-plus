import { ipcRenderer, IpcRendererEvent } from 'electron'
import * as channels from '@/common/channels'
import { nextTick } from 'vue'
import csvStringify from 'csv-stringify/lib/sync'
import { FileData } from '@/renderer/types'
import { Tabs } from '@/renderer/composables/types'

export default (tabs: Tabs) => {
  // ファイルを開く
  const open = () => ipcRenderer.send(channels.FILE_OPEN)
  ipcRenderer.on(channels.FILE_LOADED, (e: IpcRendererEvent, file: channels.FILE_LOADED) => {
    // データ未操作の場合、初期表示のタブは削除
    const activeData = tabs.state.files.find((file: FileData) => file.path === tabs.state.active)
    if (tabs.state.files.length === 1 && activeData?.path === 'newTab0' && !activeData.dirty) tabs.closeTab(activeData)

    const exists = tabs.state.files.find((fileData: FileData) => fileData.path === file.path)
    if (exists) {
      tabs.state.active = exists.path
    } else {
      tabs.addTab(file)
    }
  })

  // ファイルをドロップ
  document.addEventListener('dragover', e => e.preventDefault()) // drop イベントを発生させるために必要
  document.addEventListener('drop', e => {
    e.preventDefault()
    if (!(e.dataTransfer && e.dataTransfer.files)) return
    const files = Array.from(e.dataTransfer.files)
    const paths = files.map(file => file.path)
    ipcRenderer.send(channels.FILE_DROPPED, paths)
  })

  // ファイルを保存
  const save = (channelName?: string) => {
    if (!channelName) channelName = channels.FILE_SAVE

    const activeData = tabs.state.files.find((file: FileData) => file.path === tabs.state.active)
    if (!activeData) return

    const file: channels.FILE_SAVE = {
      path: activeData.path,
      data: csvStringify(activeData.data),
    }
    ipcRenderer.send(channelName, file)
  }
  ipcRenderer.on(channels.FILE_SAVE, () => save(channels.FILE_SAVE))
  ipcRenderer.on(channels.FILE_SAVE_AS, () => save(channels.FILE_SAVE_AS))
  ipcRenderer.on(channels.FILE_SAVE_COMPLETE, async (e: IpcRendererEvent, path: channels.FILE_SAVE_COMPLETE) => {
    const activeData = tabs.state.files.find((file: FileData) => file.path === tabs.state.active)
    if (!activeData) return

    // 既に同じファイルを開いていた場合は閉じる
    if (path !== tabs.state.active) {
      const sameFileIndex = tabs.state.files.findIndex((file: FileData) => file.path === path)
      sameFileIndex === -1 || tabs.state.files.splice(sameFileIndex, 1)
      await nextTick()
    }

    activeData.label = path.split('/').pop() || ''
    activeData.path = path
    activeData.dirty = false
    tabs.state.active = path
  })

  return {
    open,
    save,
  }
}
