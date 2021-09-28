import { Pipe, PipeTransform } from '@angular/core';
import { DonateDetailDto } from 'src/app/models/donateDetail';

@Pipe({
  name: 'filterDonate'
})
export class FilterDonatePipe implements PipeTransform {

  transform(value: DonateDetailDto[], filterDonateName: string): DonateDetailDto[] {
    filterDonateName = filterDonateName?filterDonateName.toLocaleLowerCase():""
    return filterDonateName?value.filter((c:DonateDetailDto)=>c.donateName.toLocaleLowerCase().indexOf(filterDonateName)!==-1):value;
  }

}
