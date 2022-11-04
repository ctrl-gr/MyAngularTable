import {Component, Input, OnInit} from '@angular/core';
import {MyTableActionEnum, MyTableConfig} from "./my-table-config";
import * as _ from "lodash";


@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css'],
})

export class MyTableComponent implements OnInit {

  @Input() tableConfig!: MyTableConfig;
  @Input() data!: any;

  searchTerm = '';
  selected = '';
  orderType='';
  pageIndex: number = 0;
  totalPages: number = 0;



  constructor() {
  }

  ngOnInit() {
    console.log(this.tableConfig, this.data, this.tableConfig.order, this.tableConfig.search, this.tableConfig.actions)
    this.data = _.orderBy(this.data, [this.tableConfig.order.defaultColumn])
    this.totalPages = Math.ceil(this.data.length / this.tableConfig.pagination.itemPerPage)

  }

  changePageOptions($event: any) {
    console.log($event)
    this.tableConfig.pagination.itemPerPage = +$event.target.value;
    this.pageIndex = 0;
    console.log(this.tableConfig.pagination)
    this.totalPages = Math.ceil(this.data.length / this.tableConfig.pagination.itemPerPage)
  }


  pageNavigation(direction: string) {

    if (direction == 'previous') {
      if (this.pageIndex > 0) {
        this.pageIndex = this.pageIndex - 1
      }
    } else {
      console.log(this.pageIndex, this.totalPages)
      if ((this.pageIndex + 1) < this.totalPages) {
        this.pageIndex = this.pageIndex + 1
      }
    }
  }


  actionToPerform(actionType: MyTableActionEnum) {
 // output emitter -->
  }

  setOrder(action: string, key: string) {
    this.tableConfig.order.orderType = action
    this.tableConfig.order.defaultColumn = key
    this.pageIndex = 0;
  }
}
