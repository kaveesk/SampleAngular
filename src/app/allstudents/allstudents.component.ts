import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { Observable } from 'rxjs';
import { student } from '../test/test.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.component.html',
  styleUrls: ['./allstudents.component.css']
})
export class AllstudentsComponent implements OnInit {
  allstudentdetails: Observable<student[]>; 
  constructor(private datasrc: TestService, private router: Router) { }

  ngOnInit() {
    this.loadAllstudents();
  }

  loadAllstudents() {  
    this.allstudentdetails = this.datasrc.GetAllStudents();
  }

  deletestudent(id: number){
this.datasrc.deletestudentById(id).subscribe(()=>{
});
this.loadAllstudents();
  }

  loadstudentToEdit(ID:number){
    this.router.navigate([`edit/${ID}`]);
  }

}