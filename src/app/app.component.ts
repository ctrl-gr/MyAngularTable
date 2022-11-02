import {Component, OnInit} from '@angular/core';
import {MyButtonConfig} from "./my-button/my-button-config";
import {MyOrder, MyPagination, MySearch, MyTableConfig} from "./my-table/my-table-config";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  config !: MyButtonConfig;
  table !: MyTableConfig;
  data !: any[];
  order !: MyOrder;
  search !: MySearch;
  pagination !: MyPagination;


  ngOnInit(): void {
    this.config = {
      customCssClass: 'btn btn-primary',
      text: 'giulia',
      icon: 'home'
    }
  this.pagination = {
      itemPerPage: 5,
    itemPerPageOptions: [5,10,15]
  }
    this.order = {
      defaultColumn: 'name',
      orderType: 'asc'
    }

      this.table = {
        headers: [
          {
            key: 'name',
            label: 'nome',
          },
          {
            key: 'surname',
            label: 'cognome',
          },
          {
            key: 'email',
            label: 'mail',
          },

        ],
        order: this.order,
        search: this.search,
        pagination: this.pagination
      }

    this.data = [{
      name: 'mario',
      surname: 'bros',
      email: 'ciao@ciao.it'
    },
      {
        name: 'luigi',
        surname: 'bros',
        email: 'luigi@ciao.it'
      },
      {
        name: 'peach',
        surname: 'bros',
        email: 'peach@ciao.it'
      },
      {
        name: 'waluigi',
        surname: 'bros',
        email: 'waluigi@nociao.it'
      },
      {
        name: 'browser',
        surname: 'bros',
        email: 'browser@acer.it'
      },
      {
        name: 'zlatan',
        surname: 'ibrahimovic',
        email: 'zlatan@zlatan.it'
      },
      {
        name: 'prova',
        surname: 'prova',
        email: 'prova@microonde.it'
      },
      {
        name: 'computer',
        surname: 'bottiglia',
        email: 'airpods@tissue.it'
      }
    ]

    this.search = {
      columns: this.data
    }

  }

}
