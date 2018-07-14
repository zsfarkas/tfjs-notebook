import { Component } from '@angular/core';

@Component({
  selector: 'tfn-root',
  template: `
    <mat-toolbar color="primary" class="title">
      <span>Tensorflow JS Notebook</span>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .title {
      justify-content: center;
    }
  `]
})
export class AppComponent {
}
