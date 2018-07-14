import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotebookMainComponent } from './notebook-main/notebook-main.component';

const routes: Routes = [{
  path: '',
  component: NotebookMainComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotebookRoutingModule { }
