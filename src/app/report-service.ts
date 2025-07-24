import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
    private apiUrl = 'http://localhost:8000/api/reports'; // Update to match your backend

  constructor(private http: HttpClient) {}

  addReport(report: Report): Observable<any> {
    return this.http.post(this.apiUrl, report);
  }

  getReports(): Observable<Report[]> {
    return this.http.get<Report[]>(this.apiUrl);
  }
}
