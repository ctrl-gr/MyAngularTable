export interface MyHeaders {
  key: string;
  label: string;
}

export interface MyTableConfig {
  headers: MyHeaders[];
  order: MyOrder;
}

export interface MyOrder {
  defaultColumn: string;
  orderType: string;
}

