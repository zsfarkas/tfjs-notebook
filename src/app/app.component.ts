import { Component } from '@angular/core';

@Component({
  selector: 'tfn-root',
  template: `
    <mat-toolbar color="accent" class="title">
      <img class="logo" src="assets/icons/icon-72x72.png"> <span>Tensorflow.js Notebook</span>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .title {
      /* justify-content: center; */
      color: white;
    }

    .logo {
      margin: 8px;
      width: 32px;
    }
  `]
})
export class AppComponent {
}
