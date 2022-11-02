import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'pagination'})
export class PaginationPipe implements PipeTransform {

  transform(items: any[], itemsPerPage: number, page: number): any {
    console.log('items', items)
    console.log('itemsPerPage', itemsPerPage)
    console.log('slice', items.slice( itemsPerPage*(page) , itemsPerPage*(page+1)));
    console.log('page', page)
    return [ ...items.slice( itemsPerPage*(page) , itemsPerPage*(page+1)  )]
  }
}
