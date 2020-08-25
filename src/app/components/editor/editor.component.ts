import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})

// let undoCount:number = 0;

export class EditorComponent implements OnInit {

  note: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditorComponentModal, {
      width: '250px',
      data: {note: this.note}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.note = result;
    });
  }

}

@Component({
  selector: 'editor.component.modal',
  templateUrl: 'editor.component.modal.html',
  styleUrls: ['./editor.component.scss']
})

export class EditorComponentModal {

  constructor(
    public dialogRef: MatDialogRef<EditorComponentModal>,
    @Inject(MAT_DIALOG_DATA) public data: string) {}

  onNoClick(): void {
    this.dialogRef.close();
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
