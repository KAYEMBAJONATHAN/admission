import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nurse } from './module';


@Injectable({
  providedIn: 'root'
})
export class NurseService {
  private apiUrl = 'http://127.0.0.1:8000/api/nurses';

  constructor(private http: HttpClient) {}

  addNurse(nurse: Nurse): Observable<any> {
    return this.http.post(this.apiUrl, nurse);
  }

  getNurses(): Observable<Nurse[]> {
    return this.http.get<Nurse[]>(this.apiUrl);
  }

  updateNurse(id: number, nurse: Nurse): Observable<any> {
  return this.http.put(`${this.apiUrl}/${id}`, nurse);
  }

  getNurseById(id: number): Observable<Nurse> {
  return this.http.get<Nurse>(`${this.apiUrl}/${id}`);
  }

  deleteNurse(id: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
