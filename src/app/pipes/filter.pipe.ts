import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  nokey:string=''
  transform(allContacts:any[],searchKey:string,propertyName:string): any[] {
    const result:any = []

  // logic if - any one of them is empty then is must show all contacts i.e if not typed anything in search bar show everything
if(!allContacts || searchKey=="" || propertyName==""){
  return allContacts
}
  allContacts.forEach((item:any)=>{
    if(item[propertyName].trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
      result.push(item)
    }
  })
    return result;
  }

}

  