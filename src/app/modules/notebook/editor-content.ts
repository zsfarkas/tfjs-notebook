export enum EditorType {
  CODE = 'CODE', COMMENT = 'COMMENT'
}

export class EditorContent {
  constructor(
    public type: EditorType,
    public content = '',
    public consoleOutput: ConsoleOutput[] = [],
    public output?: any,
    public consoleExpanded = true,
    public editorExpanded = true) { }
}

export enum ConsoleSeverity {
  LOG = 'LOG', WARN = 'WARN', ERROR = 'ERROR', DEBUG = 'DEBUG'
}

export class ConsoleOutput {
  constructor(
    public severity: ConsoleSeverity,
    public content: string) { }
}
