import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiUrl = 'http://127.0.0.1:8000/api/patients';

  constructor(private http: HttpClient) {}

  addPatient(data: any) {
    return this.http.post(this.apiUrl, data);
  }
}
