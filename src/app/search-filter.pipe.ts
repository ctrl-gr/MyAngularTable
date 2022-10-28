import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: any[], selectedColumn: string, searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    console.log(items)
  console.log(selectedColumn)
    searchText = searchText.toLowerCase();
    return items.filter((it) => {
      console.log(it[selectedColumn])
      return it[selectedColumn].toLowerCase().includes(searchText);
    });
  }
}
