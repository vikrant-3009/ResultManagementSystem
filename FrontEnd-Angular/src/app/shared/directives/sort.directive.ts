import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Sort } from 'src/app/core/util/sort';

@Directive({
  selector: '[appSort]'
})
export class SortDirective {

  @Input() appSort!: Array<any>;

  constructor(private targetElementRef: ElementRef) { }

  @HostListener("click")
  sortColumn() {

    // creating a new sort class ('src/app/core/util/sort') object
    const sortObj = new Sort();

    // Reference of current clicked element (i.e., the table header column)
    const ele = this.targetElementRef.nativeElement;

    // get the type of data (specifically date)
    const dataType = ele.getAttribute('data-type');
    
    // in which order list is to be sorted (asc or desc)
    const dataOrder = ele.getAttribute('data-order');

    // name of the column attribute, according to which data is to be sorted
    const property = ele.getAttribute('data-name');

    // calling the sort method on array objects (it takes a comparator function as an argument)
    this.appSort.sort(sortObj.startSort(property, dataOrder, dataType));

  }

}
