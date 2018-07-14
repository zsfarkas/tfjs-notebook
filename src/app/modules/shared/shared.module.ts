import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarDividerComponent } from './toolbar-divider/toolbar-divider.component';
import { MatDividerModule } from '../../../../node_modules/@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatDividerModule
  ],
  declarations: [ToolbarDividerComponent],
  exports: [
    ToolbarDividerComponent
  ]
})
export class SharedModule { }
