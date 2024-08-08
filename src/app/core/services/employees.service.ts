import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  baseUrl: string = 'https://reqres.in/api'
  searchTerm: BehaviorSubject<number> = new BehaviorSubject(0)
  constructor(private http: HttpClient) { }


  getAllEmployee(pageNum: number = 1): Observable<any> {
    return this.http.get(`${this.baseUrl}/users?page=${pageNum}`);
  }
  getEmployeeById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${id}`);
  }
}
