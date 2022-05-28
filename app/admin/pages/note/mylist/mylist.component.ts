import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.scss']
})
export class MylistComponent implements OnInit {
  @Input('show-notes') listNotes:Note[] = [];
  notes: Note[] = [];
  @Output('edit') lol:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.doLoad();
  }
  //Xóa 
  deleteNote(index:number) {
    this.listNotes.splice(index, 1);
    this.doSave();
    alert("đã xóa Sản Phẩm thành công ");
  }
  // chỉnh sửa đến 
  sendNoteIndex(index:number) {
    this.lol.emit(index);
    this.doSave();
  }
  doSave() {
    localStorage.setItem('note', JSON.stringify(this.notes));
  }
  doLoad() {
    let strNote = localStorage.getItem('note');
    if (strNote) {
      this.notes = JSON.parse(strNote);
    }
  }
}
