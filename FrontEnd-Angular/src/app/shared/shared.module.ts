import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SortDirective } from './directives/sort.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SortDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SortDirective
  ]
})
export class SharedModule { }
