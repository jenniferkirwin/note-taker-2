import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataqueryService {

  constructor(private firebase: AngularFireFunctions) { }

  callable = this.firebase.httpsCallable('getNotes');
  callable2 = this.firebase.httpsCallable('setNotes');

  setData(updatedNotes:string[]) {
    this.firebase.httpsCallable('setNotes')(updatedNotes);
  }

  pullData() {
    return this.firebase.httpsCallable('getNotes')({ action: "Data Pull" })
    .subscribe(resp => {
      console.log( resp.notes );
      const notesArray = resp.notes;
      return notesArray;
    }, err => {
      console.error( err );
      return err;
    });
  }

}
