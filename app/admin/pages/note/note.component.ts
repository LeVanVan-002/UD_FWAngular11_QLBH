import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  isShowEnterNote: boolean = false;
  isShowEditNote: boolean = false;
  isShowButton: boolean = true;
  notes: Note[] = [];
  onenote: Note = new Note();
  currentIndex: number = 0;

///khia báo 
  constructor() { }


  ngOnInit(): void {
    this.doLoad();
  }
  //Nhận vị trí của 1 đối tượng trong mảng notes
  getNoteIndex(index: number) {
    this.isShowEditNote = true;
    this.isShowButton = !this.isShowEditNote;
    this.onenote = this.notes[index];
    this.currentIndex = index;
  }
  //Nhận dữ liệu đã đc chỉnh sửa từ EditComponet và cập nhật lại dữ liệu
  getNoteEdited(arg: Note) {
    this.isShowEditNote = false;
    this.isShowButton = !this.isShowEditNote;
    arg.dateNote = new Date();
    this.notes[this.currentIndex] = arg;
  }
  //show form viết ghi chú
  showEnterNote() {
    this.isShowEnterNote = true;
    this.isShowButton = !this.isShowEnterNote;
  }
  //Nhận dữ liệu của 1 từ MyFormComponet
  getNote(data: Note) {
    this.isShowEnterNote = false;
    this.isShowButton = !this.isShowEnterNote;
    this.notes.push(data);
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
