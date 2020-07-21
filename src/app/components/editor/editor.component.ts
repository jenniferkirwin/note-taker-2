import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})

// let undoCount:number = 0;

export class EditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  paste(event: any) {
    let pastedData:any = event.clipboardData.getData('Text');
    event.preventDefault();
    document.execCommand("insertText", false, pastedData);
  }

  bold() {
    document.execCommand("bold", false);
  }

  italic() {
    document.execCommand("italic", false);
  }

  underline() {
    document.execCommand("underline", false);
  }

  justify() {
    document.execCommand("justifyFull", false)
  }

  justifyCenter() {
    document.execCommand("justifyCenter", false);
  }

  justifyLeft() {
    document.execCommand("justifyLeft", false);
  }

  justifyRight() {
    document.execCommand("justifyRight", false);
  }

  orderedList() {
    document.execCommand("insertOrderedList", false)
  }

  unorderedList() {
    document.execCommand("insertUnorderedList", false)
  }

  redo() {
    document.execCommand("redo", false);
  }

  undo() {
    document.execCommand("undo", false);
  }

}
