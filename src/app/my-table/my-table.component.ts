import {Component, Input, OnInit} from '@angular/core';
import {MyTableConfig} from "./my-table-config";

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css'],
})

export class MyTableComponent implements OnInit {

  @Input() tableConfig!: MyTableConfig;
  @Input() data!: any;

  constructor() { }

  ngOnInit() {
    console.log(this.tableConfig, this.data)
  }


}
