import { Injectable } from '@angular/core';
import {Employee} from './employee';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { enviroment } from './enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {  //DOCZYTAC TUTAJ ZASADY DZIALANIA TEGO HTTP CLIENT ITP

  private apiServerUrl = enviroment.apiBaseUrl;

    constructor(private http: HttpClient) {}

    public getEmployees(): Observable<Employee[]>{ 
        return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/getAll`);
    }

    public addEmployees(employee: Employee): Observable<Employee[]>{
      return this.http.post<Employee[]>(`${this.apiServerUrl}/employee/add`,employee);
    }

    public updateEmployees(employee: Employee): Observable<Employee[]>{
      return this.http.put<Employee[]>(`${this.apiServerUrl}/employee/update`,employee);
    }

    public deleteEmployees(employeeId: number): Observable<void>{
      return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`);
    }

}

