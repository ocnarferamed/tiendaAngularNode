import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
   const resultProducts =[];
    for( let product of value){
      if(product.name.indexOf(arg) != -1){
        resultProducts.push(product);
      }
    }
    return resultProducts;
  }

}
