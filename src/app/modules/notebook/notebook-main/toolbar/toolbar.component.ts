import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tfn-toolbar',
  template: `
    <mat-toolbar>
      <button mat-icon-button (click)='codeAdded.emit()' matTooltip="Add a new code cell to the first position">
        <mat-icon>add</mat-icon></button>
      <button mat-icon-button (click)='commentAdded.emit()'  matTooltip="Add a new comment cell to the first position">
        <mat-icon>add_comment</mat-icon></button>
      <tfn-toolbar-divider></tfn-toolbar-divider>
      <button mat-icon-button (click)='kernelRestarted.emit()' matTooltip="Remove all outputs"><mat-icon>autorenew</mat-icon></button>
      <tfn-toolbar-divider></tfn-toolbar-divider>
      <button mat-icon-button (click)='contentDeleted.emit()' matTooltip="Remove all cells"><mat-icon>delete</mat-icon></button>
      <tfn-toolbar-divider></tfn-toolbar-divider>
      <tfn-file-loader (fileLoaded)="openRequested.emit($event)" matTooltip="Open a previously downloaded notebook"></tfn-file-loader>
      <button mat-icon-button (click)='downloadRequested.emit()' matTooltip="Download the current notebook">
        <mat-icon>archive</mat-icon></button>
      <tfn-toolbar-divider></tfn-toolbar-divider>
      <button mat-icon-button (click)='openApiDocu()' matTooltip="Open Tensorflow.js API reference"><mat-icon>help</mat-icon></button>
    </mat-toolbar>
  `,
  styles: []
})
export class ToolbarComponent implements OnInit {

  @Output() commentAdded = new EventEmitter();

  @Output() codeAdded = new EventEmitter();

  @Output() kernelRestarted = new EventEmitter();

  @Output() openRequested = new EventEmitter<string>();

  @Output() downloadRequested = new EventEmitter();

  @Output() contentDeleted = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  openApiDocu() {
    window.open('https://js.tensorflow.org/api/0.12.0/');
  }
}
