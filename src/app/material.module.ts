
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import all the Material modules
import { MatButtonModule, MatToolbarModule } from '@angular/material';


@NgModule({
  imports: [ MatButtonModule,MatToolbarModule],
  exports: [ MatButtonModule, MatToolbarModule],

})
export class MaterialModule { }
