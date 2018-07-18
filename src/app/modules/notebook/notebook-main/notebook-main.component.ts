import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { EditorContent, EditorType} from '../editor-content';
import { saveAs } from 'file-saver';

@Component({
  selector: 'tfn-notebook-main',
  template: `
    <tfn-toolbar
      (codeAdded)="codeAddedFromToolbar()"
      (commentAdded)="commentAddedFromToolbar()"
      (kernelRestarted)="kernelRestarted()"
      (downloadRequested)="download()"
      (openRequested)="loadFile($event)"
      (contentDeleted)="deleteAll()">
    </tfn-toolbar>
    <div class="content-wrapper" *ngFor="let content of contents">
      <tfn-editor
        [editorContent]="content"
        [currentEditorContents]="contents"
        (deleted)="contentDeleted($event)"
        (codeAdded)="codeAddedAfter($event)"
        (commentAdded)="commentAddedAfter($event)"
        (codeExecuted)="updateLocalStorage()"
        (contentChanged)="updateLocalStorage()"
      >
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
    this.restoreContentsFromLocalStorage();
  }

  codeAddedFromToolbar() {
    this.contents.unshift(new EditorContent(EditorType.CODE));
    this.updateLocalStorage();
  }

  commentAddedFromToolbar() {
    this.contents.unshift(new EditorContent(EditorType.COMMENT));
    this.updateLocalStorage();
  }

  codeAddedAfter(content: EditorContent) {
    this.insertContentAfter(EditorType.CODE, content);
    this.updateLocalStorage();
  }

  commentAddedAfter(content: EditorContent) {
    this.insertContentAfter(EditorType.COMMENT, content);
    this.updateLocalStorage();
  }

  contentDeleted(content: EditorContent) {
    if (this.contents.indexOf(content) > -1) {
      this.contents.splice(this.contents.indexOf(content), 1);
    }

    this.updateLocalStorage();
  }

  kernelRestarted() {
    this.contents.forEach((content: EditorContent) => {
      content.consoleOutput = [];
      content.output = null;
    });
    this.updateLocalStorage();
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
    this.updateLocalStorage();
  }

  loadFile(content: string) {
    this.contents =  JSON.parse(content);
    this.updateLocalStorage();
  }

  private insertContentAfter(newContentType: EditorType, afterContent: EditorContent) {
    const contentIndex = this.contents.indexOf(afterContent);
    this.contents.splice(contentIndex + 1, 0, new EditorContent(newContentType));
  }

  updateLocalStorage() {
    localStorage.setItem('contents', JSON.stringify(this.contents));
  }

  private restoreContentsFromLocalStorage() {
    const contentsString = localStorage.getItem('contents');

    if (contentsString) {
      this.contents = JSON.parse(contentsString);
    }
  }

  deleteAll() {
    this.contents = [new EditorContent(EditorType.CODE)];
    this.updateLocalStorage();
  }
}
