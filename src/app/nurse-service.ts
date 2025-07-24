import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nurse } from './module';


@Injectable({
  providedIn: 'root'
})
export class NurseService {
  private apiUrl = 'http://localhost:8000/api/nurses'; // Change to your actual API endpoint

  constructor(private http: HttpClient) {}

  addNurse(nurse: Nurse): Observable<any> {
    return this.http.post(this.apiUrl, nurse);
  }

  getNurses(): Observable<Nurse[]> {
    return this.http.get<Nurse[]>(this.apiUrl);
  }
}
