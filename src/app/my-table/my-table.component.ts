import {Component, Input, OnInit} from '@angular/core';
import {MyOrder, MyPagination, MySearch, MyTableConfig} from "./my-table-config";
import * as _ from "lodash";


@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css'],
})

export class MyTableComponent implements OnInit {

  @Input() tableConfig!: MyTableConfig;
  @Input() data!: any;
  @Input() order !: MyOrder;
  @Input() search !: MySearch;
  @Input() pagination !: MyPagination;
  searchTerm = ''
  selected = '';


  constructor() {
  }

  ngOnInit() {
    console.log(this.tableConfig, this.data, this.order, this.search) // why search is still undefined?
    this.data = _.orderBy(this.data, [this.order.defaultColumn])

  }

  sort(key : string, orderType : any) {
    this.data = _.orderBy(this.data, [key], [orderType])
    this.order.orderType = orderType
    console.log('Order changed', this.data)
  }


}
