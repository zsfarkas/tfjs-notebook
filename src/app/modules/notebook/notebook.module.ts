import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotebookMainComponent } from './notebook-main/notebook-main.component';
import { NotebookRoutingModule } from './notebook-routing.module';
import {
  MatToolbarModule, MatButtonModule, MatIconModule, MatInputModule, MatExpansionModule, MatDividerModule, MatTooltipModule
} from '@angular/material';
import { ToolbarComponent } from './notebook-main/toolbar/toolbar.component';
import { EditorComponent } from './notebook-main/editor/editor.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '../../../../node_modules/@angular/forms';
import { FileLoaderComponent } from './notebook-main/file-loader/file-loader.component';
import { MatCodemirrorModule } from 'ngx-mat-codemirror';


@NgModule({
  imports: [
    CommonModule,
    NotebookRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatExpansionModule,
    MatDividerModule,
    SharedModule,
    FormsModule,
    MatCodemirrorModule,
    MatTooltipModule
  ],
  declarations: [
    NotebookMainComponent,
    ToolbarComponent,
    EditorComponent,
    FileLoaderComponent
  ]
})
export class NotebookModule { }
