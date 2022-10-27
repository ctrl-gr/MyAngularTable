import {Component, Input, OnInit} from '@angular/core';
import {MyOrder, MySearch, MyTableConfig} from "./my-table-config";
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


  constructor() {
  }

  ngOnInit() {
    console.log(this.tableConfig, this.data, this.order, this.search)
    this.data = _.orderBy(this.data, [this.order.defaultColumn])
  }

  sort(key : string, orderType : any) {
    this.data = _.orderBy(this.data, [key], [orderType])
    this.order.orderType = orderType
    console.log('Order changed', this.data)
  }

  find(key : string, text : string){ //takes in input what I chose on select and the text I wrote in the search bar and gives me back the filtered result based on what I was looking for.
    this.data = _.filter(this.tableConfig.headers, text) // filter text in my array of key (alias my columns)
    console.log('Found element')

  }

}
