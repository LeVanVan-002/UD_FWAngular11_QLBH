import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.scss']
})
export class EditformComponent implements OnInit {
  @Input('edit-form') dataNoteEdit: Note = new Note();

  @Output('save-edit') saveNoteEdited: EventEmitter<any> = new EventEmitter();
  notes: Note[] = [];
  constructor() { }

  ngOnInit(): void {
    this.doLoad();
  }
  //Gửi dữ liệu của 1 ghi chú đã đc chỉnh sửa đến ParentComponet Note
  saveNoteEdit() {
    this.saveNoteEdited.emit(this.dataNoteEdit);
    alert("đã cập nhật thành công !");
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
