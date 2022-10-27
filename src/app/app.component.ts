import {Component, OnInit} from '@angular/core';
import {MyButtonConfig} from "./my-button/my-button-config";
import {MyOrder, MySearch, MyTableConfig} from "./my-table/my-table-config";


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


  ngOnInit(): void {
    this.config = {
      customCssClass: 'btn btn-primary',
      text: 'giulia',
      icon: 'home'
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
        search: this.search
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
      }
    ]

  }

}
