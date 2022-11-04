import {Component, OnInit} from '@angular/core';
import {MyButtonConfig} from "./my-button/my-button-config";
import {MyAction, MyOrder, MyPagination, MySearch, MyTableActionEnum, MyTableConfig} from "./my-table/my-table-config";
import {stringifyTask} from "@angular/compiler-cli/ngcc/src/execution/tasks/utils";


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
  actions !: MyAction[];


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

    this.search = {
      columns: this.data
    }

    this.actions = [
      {
        text: 'modifica',
        cssClass: 'btn btn-warning',
        actionType: MyTableActionEnum.EDIT,
        icon: 'edit',
        onTop: false
      },
      {
        text: 'elimina',
        cssClass: 'btn btn-danger',
        actionType: MyTableActionEnum.DELETE,
        icon: 'remove',
        onTop: false
      },
      {
        text: 'nuovo dato',
        cssClass: 'btn btn-primary',
        actionType: MyTableActionEnum.NEW_ROW,
        icon: 'add',
        onTop: true
      }
    ]

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

    },
      {
        name: 'luigi',
        surname: 'bros',
        email: 'luigi@ciao.it',

      },
      {
        name: 'peach',
        surname: 'bros',
        email: 'peach@ciao.it',

      },
      {
        name: 'waluigi',
        surname: 'bros',
        email: 'waluigi@nociao.it',

      },
      {
        name: 'browser',
        surname: 'bros',
        email: 'browser@acer.it',

      },
      {
        name: 'zlatan',
        surname: 'ibrahimovic',
        email: 'zlatan@zlatan.it',

      },
      {
        name: 'prova',
        surname: 'prova',
        email: 'prova@microonde.it',

      },
      {
        name: 'computer',
        surname: 'bottiglia',
        email: 'airpods@tissue.it',

      }
    ]

  }

  actionToPerform(myObject: object) {

    let action = myObject.value.action

    switch (action) {
      case 'edit': {
        console.log('element ready to get edited')
        break;
      }
      case 'delete': {
        console.log('element deleted')
        break;
      }
      case 'new-row': { // this is not taking anything in input
        console.log('new element')
        break;
      }
    }
  }
}


