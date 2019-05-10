import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { student } from './test/test.component';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  url = 'https://localhost:44325/api/studentclr';

  constructor(private http: HttpClient) { }

  GetAllStudents(): Observable<student[]> {
    return this.http.get<student[]>(this.url + '/GetAllStudents');
  }

  getstudentById(ID: number): Observable<student> {
    return this.http.get<student>(this.url + '/Edit_student/' + ID);
  }

  createstudent(student: student): Observable<student> {
    return this.http.post<student>(this.url + '/AddStudent', JSON.stringify(student), 
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

  updatestudent(student: student): Observable<student> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<student>(this.url + '/AddStudent', student, httpOptions);
  }

  deletestudentById(id: number): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.url + '/Delete_Student/' + id, httpOptions);
  }
}
