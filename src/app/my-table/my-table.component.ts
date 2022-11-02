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

  searchTerm = ''
  selected = '';


  constructor() {
  }

  ngOnInit() {
    console.log(this.tableConfig, this.data, this.tableConfig.order, this.tableConfig.search)
    this.data = _.orderBy(this.data, [this.tableConfig.order.defaultColumn])

  }

  sort(key : string, orderType : any) {
    this.data = _.orderBy(this.data, [key], [orderType])
    this.tableConfig.order.orderType = orderType
    console.log('Order changed', this.data)
  }


  changePageOptions($event: any) {
    console.log($event)
    this.tableConfig.pagination.itemPerPage = +$event.target.value;
    console.log(this.tableConfig.pagination)

  }
}
