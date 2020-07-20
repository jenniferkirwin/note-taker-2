import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  test(event: any) {
    let pastedData:any = event.clipboardData.getData('Text');
    const el:any = document.getElementById('text-box');
    event.preventDefault();
    console.log(pastedData);
    // insertTextAtCursor(el, pastedData);
  }

}
