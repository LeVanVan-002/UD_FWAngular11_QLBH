import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Note } from 'src/app/models/note.model';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserViewComponent implements OnInit {
  isShowEnterNote: boolean = false;
  isShowEditNote: boolean = false;
  isShowButton: boolean = true;
  notes: Note[] = [];
  onenote: Note = new Note();
  currentIndex: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  getNoteIndex(index: number) {
    this.isShowEditNote = true;
    this.isShowButton = !this.isShowEditNote;
    this.onenote = this.notes[index];
    this.currentIndex = index;
  }
}
