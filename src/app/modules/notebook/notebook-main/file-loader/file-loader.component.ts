import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tfn-file-loader',
  template: `
      <input type="file" accept="application/json" hidden="true" id="file-loader"
      (change)="loadFile($event)">
      <label mat-icon-button for="file-loader" class="mat-icon-button"><span class="mat-button-wrapper">
      <mat-icon>unarchive</mat-icon></span>
      </label>
  `,
  styles: []
})
export class FileLoaderComponent implements OnInit {

  @Output() fileLoaded = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  loadFile(event: Event) {
    const file = (<HTMLInputElement>event.target).files[0];

    if (!file) {
      return;
    }

    console.log('loading image: ' + file.name);

    const reader = new FileReader();
    reader.onload = (loadEvent: any) => {
      this.fileLoaded.emit(loadEvent.target.result);
    };

    reader.readAsText(file);
  }
}
