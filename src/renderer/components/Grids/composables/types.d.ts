import HandsOnTable from 'handsontable'
import { FileData, Options } from '@/renderer/types'

export type Props = {
  table: HandsOnTable | null;
  file: FileData;
  active: boolean;
  keyword: string;
  options: Options;
}
