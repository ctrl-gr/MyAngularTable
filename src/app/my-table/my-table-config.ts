export interface MyHeaders {
  key: string;
  label: string;
}

export interface MyTableConfig {
  headers: MyHeaders[];
  order: MyOrder;
  search: MySearch;
}

export interface MyOrder {
  defaultColumn: string;
  orderType: string;
}

export interface MySearch {
  columns: string[];
}

