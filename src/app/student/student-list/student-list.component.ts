import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  listStudent: Student[] = [];
  student: Student = {};
  studentUpdate: Student = {}; 
  isShowCreateFrom = false;
  isShowUpdateFrom = false;
  currentIdex = -1;

  constructor() { }

  ngOnInit(): void {
  }
  addNewStudent() {
    const student = {
      id: this.student.id,
      fullName: this.student.fullName,
      address: this.student.address,
      mark: this.student.mark
    }
    this.listStudent.push(student);
    this.student={};
  }
  openFrom() {
    this.isShowCreateFrom = !this.isShowCreateFrom;
  }

  remove(i:number){
    this.listStudent.splice(i, 1)
  }
  showUpdateFrom(i:number){
    this.currentIdex = i;
    this.isShowUpdateFrom = !this.isShowUpdateFrom;
    this.studentUpdate = {
      id: this.listStudent[i].id,
      fullName: this.listStudent[i].fullName,
      address: this.listStudent[i].address,
      mark: this.listStudent[i].mark
    };
    
  }
  updateStudent(index){
    this.listStudent[index] = this.studentUpdate;
    this.student={};
  }
}
