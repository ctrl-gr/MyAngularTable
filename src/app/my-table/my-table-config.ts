export interface MyHeaders {
  key: string;
  label: string;
}

export interface MyTableConfig {
  headers: MyHeaders[];
  order: MyOrder;
  search: MySearch;
  pagination: MyPagination;
  actions: MyTableActionEnum
}

export interface MyOrder {
  defaultColumn: string;
  orderType: string;
}

export interface MySearch {
  columns: string[];
}

export interface MyPagination {
  itemPerPage: number;
  itemPerPageOptions: number[];
}

export interface MyTableActionEnum {
  actions: string[];
}

