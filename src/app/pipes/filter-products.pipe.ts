import { Pipe, PipeTransform } from '@angular/core';
import { ProductData } from '../models/interfaces/product.interface';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: ProductData[], search: string): ProductData[] {
    return products.filter((product) => product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
  }

}
