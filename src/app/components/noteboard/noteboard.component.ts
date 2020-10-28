import { Component, OnInit, ViewChild } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PopupComponent } from '../../components/popup/popup.component';
import { DataqueryService } from '../../service/dataquery.service';
import { TestBed } from '@angular/core/testing';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface DialogData {
  note: string;
  noteIndex: number;
}

@Component({
  selector: 'app-noteboard',
  templateUrl: './noteboard.component.html',
  styleUrls: ['./noteboard.component.scss']
})
export class NoteboardComponent implements OnInit {

  constructor(public dialog: MatDialog, public dataService: DataqueryService) {}

  warning:number = -1;
  tests:string[] = [];

  editNote(noteIndex:number): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '100%',
      data: {note: this.notes[noteIndex], noteIndex: noteIndex}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (!result.note && !result.delete) {
        return;
      };
      if (!result.note && result.delete) {
        this.deleteNote(noteIndex);
        return;
      }
      if (noteIndex === this.notes.length) {
        this.notes.unshift(result.note);
        return;
      }
      this.notes[noteIndex] = result.note;
    });
  }

  confirmDelete(elementIndex:number) {
    this.warning = elementIndex
  }

  deleteNote(elementIndex:number) {
    this.notes.splice(elementIndex, 1);
    this.dismissDelete();
  }

  dismissDelete() {
    this.warning = -1;
  }

  ngOnInit(): void {
  }

  notes = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker'
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.notes, event.previousIndex, event.currentIndex);
  }

  pullData() {
    this.dataService.callable({ action: "Data Pull" })
    .subscribe(resp => {
      console.log( resp.notes );
      this.notes = [...resp.notes];
    }, err => {
      console.error( err );
    });
  }

  // pullData() {
  //   let myTest = this.dataService.pullData();
  //   console.log(`${myTest} WORKED`)
  // }

  

}
