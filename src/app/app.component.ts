import {Component, OnInit} from '@angular/core';
import {MyButtonConfig} from "./my-button/my-button-config";
import {MyOrder, MyPagination, MySearch, MyTableActionEnum, MyTableConfig} from "./my-table/my-table-config";


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
  actions !: MyTableActionEnum[];


  ngOnInit() {
    this.config = {
      customCssClass: 'btn btn-primary',
      text: 'giulia',
      icon: 'home'
    }
    this.pagination = {
      itemPerPage: 5,
      itemPerPageOptions: [5, 10, 15]
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
        {
          key: 'actions',
          label: 'azioni',
        }
      ],
      order: this.order,
      search: this.search,
      pagination: this.pagination,
      actions: this.actions
    }

    this.data = [{
      name: 'mario',
      surname: 'bros',
      email: 'ciao@ciao.it',
      actions: [MyTableActionEnum.EDIT, MyTableActionEnum.DELETE]
    },
      {
        name: 'luigi',
        surname: 'bros',
        email: 'luigi@ciao.it',
        actions: [MyTableActionEnum.EDIT, MyTableActionEnum.DELETE]
      },
      {
        name: 'peach',
        surname: 'bros',
        email: 'peach@ciao.it',
        actions: [MyTableActionEnum.EDIT, MyTableActionEnum.DELETE]
      },
      {
        name: 'waluigi',
        surname: 'bros',
        email: 'waluigi@nociao.it',
        actions: [MyTableActionEnum.EDIT, MyTableActionEnum.DELETE]
      },
      {
        name: 'browser',
        surname: 'bros',
        email: 'browser@acer.it',
        actions: [MyTableActionEnum.EDIT, MyTableActionEnum.DELETE]
      },
      {
        name: 'zlatan',
        surname: 'ibrahimovic',
        email: 'zlatan@zlatan.it',
        actions: [MyTableActionEnum.EDIT, MyTableActionEnum.DELETE]
      },
      {
        name: 'prova',
        surname: 'prova',
        email: 'prova@microonde.it',
        actions: [MyTableActionEnum.EDIT, MyTableActionEnum.DELETE]
      },
      {
        name: 'computer',
        surname: 'bottiglia',
        email: 'airpods@tissue.it',
        actions: [MyTableActionEnum.EDIT, MyTableActionEnum.DELETE]
      }
    ]

    this.search = {
      columns: this.data
    }

    this.actions = [
      MyTableActionEnum.EDIT, MyTableActionEnum.DELETE
    ]
  }
}


