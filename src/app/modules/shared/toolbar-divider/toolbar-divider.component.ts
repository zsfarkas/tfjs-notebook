import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tfn-toolbar-divider',
  template: `
    <mat-divider [vertical]="true" class="toolbar-divider"></mat-divider>
  `,
  styles: [`
    .toolbar-divider {
      margin: 0 8px;
    }
  `]
})
export class ToolbarDividerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
