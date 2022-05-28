import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Note } from 'src/app/models/note.model';
@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss']
})
export class MyformComponent implements OnInit {
  @Output('write-note') noteData: EventEmitter<any> = new EventEmitter();
  notes: Note[] = [];
  data: Note = new Note();

  noteForm : FormGroup|any;
   
  constructor() { }

  ngOnInit(): void {
    this.doLoad();
    this.initForm();
  }
  initForm(){
   this.noteForm = new FormGroup({
     'title':new FormControl(null,[Validators.required,Validators.minLength(3)]),
     'content':new FormControl(null,[Validators.required,Validators.minLength(3)]),
     'image':new FormControl(null,[Validators.required]),
     'price':new FormControl(null,[Validators.required]),
   })
  }
  onSubmit(){
    if(this.noteForm.invalid){
      alert('bạn phải nhập đầy đủ thông tin')
    }else{
      this.data =new Note;
      this.data.title =this.noteForm.controls.title.value;
      this.data.content =this.noteForm.controls.content.value;
      this.data.image =this.noteForm.controls.image.value;
      this.data.price =this.noteForm.controls.price.value;
      this.writeNote();
      // alert("thêm sản phẩm thành công !")
    }
   
  }
  // thêm 
  writeNote() {
    let currentData = Object.assign({}, this.data);
    this.noteData.emit(currentData);
    this.doSave();
    this.data = new Note;
    alert("thêm sản phẩm thành công !")
  }
  doSave() {
    localStorage.setItem('note1', JSON.stringify(this.notes));
  }
  doLoad() {
    let strNote = localStorage.getItem('note1');
    if (strNote) {
      this.notes = JSON.parse(strNote);
    }
  }
}
