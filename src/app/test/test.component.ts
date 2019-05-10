import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { NgForm } from '@angular/forms';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  student: student = {
    ID: null,
    UserID: null,
    FirstName: null,
    LastName: null,
    Email: null,
    Mobile: null,
    Oraganization: null,
    Role: null,
    Status: null
  };
  
  savedata:boolean;
  massage:string;

  constructor(private datasrc: TestService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    let currentId = this.activeRoute.snapshot.params["id"];

    this.datasrc.getstudentById(currentId).subscribe((res)=>{
      console.log(res)
      this.student = res;
    });
  }

  onSubmit(formData: NgForm) {
     console.log(formData.value);
    this.datasrc.createstudent(this.student).subscribe((res)=>{
console.log(res);
    }); 
  }
}

export class student {
  ID: number;
  UserID: string;
  FirstName: string;
  LastName: string;
  Email: string;
  Mobile: number;
  Oraganization: string;
  Role: string;
  Status: string;
};
