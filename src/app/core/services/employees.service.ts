import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http:HttpClient) { }


  getAllEmployee():Observable<any>{
    return this.http.get(`https://reqres.in/api/users`);
  }
  getEmployeeById(id:number):Observable<any>{
    return this.http.get(`https://reqres.in/api/users/${id}`);
  }
}
