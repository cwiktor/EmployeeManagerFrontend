import { Injectable } from '@angular/core';
import {Employee} from './employee';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { enviroment } from './enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {  

  private apiServerUrl = enviroment.apiBaseUrl;

    constructor(private http: HttpClient) {}

    public getEmployees(): Observable<Employee[]>{ 
        return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/getAll`);
    }

    public addEmployee(employee: Employee): Observable<Employee[]>{
      return this.http.post<Employee[]>(`${this.apiServerUrl}/employee/add`,employee);
    }

    public updateEmployee(employee: Employee): Observable<Employee[]>{
      return this.http.put<Employee[]>(`${this.apiServerUrl}/employee/update`,employee);
    }

    public deleteEmployee(employeeId: number): Observable<void>{
      return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`);
    }

}

