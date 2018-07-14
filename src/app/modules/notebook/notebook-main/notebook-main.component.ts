import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { EditorContent, EditorType, ConsoleSeverity } from '../editor-content';
import { saveAs } from 'file-saver';

@Component({
  selector: 'tfn-notebook-main',
  template: `
    <tfn-toolbar
      (codeAdded)="codeAddedFromToolbar()"
      (commentAdded)="commentAddedFromToolbar()"
      (kernelRestarted)="kernelRestarted()"
      (downloadRequested)="download()"
      (openRequested)="loadFile($event)">
    </tfn-toolbar>
    <div class="content-wrapper" *ngFor="let content of contents">
      <tfn-editor
        [editorContent]="content"
        [currentEditorContents]="contents"
        (deleted)="contentDeleted($event)"
        (codeAdded)="codeAddedAfter($event)"
        (commentAdded)="commentAddedAfter($event)">
      </tfn-editor>
    </div>
  `,
  styles: [`
    .content-wrapper {
      margin: 16px 32px 16px 32px;
    }
  `]
})
export class NotebookMainComponent implements OnInit {

  contents: EditorContent[] = [new EditorContent(EditorType.CODE)];

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
  }

  codeAddedFromToolbar() {
    this.contents.unshift(new EditorContent(EditorType.CODE));
  }

  commentAddedFromToolbar() {
    this.contents.unshift(new EditorContent(EditorType.COMMENT));
  }

  codeAddedAfter(content: EditorContent) {
    this.insertContentAfter(EditorType.CODE, content);
  }

  commentAddedAfter(content: EditorContent) {
    this.insertContentAfter(EditorType.COMMENT, content);
  }

  contentDeleted(content: EditorContent) {
    if (this.contents.indexOf(content) > -1) {
      this.contents.splice(this.contents.indexOf(content), 1);
    }
  }

  kernelRestarted() {
    this.contents.forEach((content: EditorContent) => {
      content.consoleOutput = [];
      content.output = null;
    });
  }

  download() {

    const data = JSON.stringify(this.contents, (key: string, value: any) => {
      if (key === 'output') {
        return null;
      }

      return value;
    }, ' ');
    const blob = new Blob([data], {type: 'text/plain;charset=utf-8'});

    saveAs(blob, 'tfjs-notebook.json');
  }

  loadFile(content: string) {
    this.contents =  JSON.parse(content);
  }

  private insertContentAfter(newContentType: EditorType, afterContent: EditorContent) {
    const contentIndex = this.contents.indexOf(afterContent);
    this.contents.splice(contentIndex + 1, 0, new EditorContent(newContentType));
  }
}
