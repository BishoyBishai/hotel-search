import { SortEnum } from "../types";
export interface SortElementProps {
  name:string;
  state:boolean;
  onClick: (type: SortEnum) => void;
  type: SortEnum;
}
