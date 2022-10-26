import {Component, Input, OnInit} from '@angular/core';
import {MyOrder, MyTableConfig} from "./my-table-config";
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

  constructor() {
  }

  ngOnInit() {
    console.log(this.tableConfig, this.data, this.order)
    this.data = _.orderBy(this.data, [this.order.defaultColumn])

  }

}
