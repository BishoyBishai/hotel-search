import { SortStore } from "./../../containers/sortList/types";
export enum SortEnum {
  "BY_NAME" = "BY_NAME",
  "BY_PRICE" = "BY_PRICE"
}

export interface SortListProps extends SortStore {
  onClick: (type: SortEnum) => void;
}
