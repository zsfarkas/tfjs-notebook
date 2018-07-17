import { Component } from '@angular/core';

@Component({
  selector: 'tfn-root',
  template: `
    <mat-toolbar color="accent" class="title">
      <span>Tensorflow.js Notebook</span>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .title {
      /* justify-content: center; */
      color: white;
    }
  `]
})
export class AppComponent {
}
