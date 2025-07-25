import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
    private apiUrl = 'http://127.0.0.1:8000/api/reports';

  constructor(private http: HttpClient) {}

  addReport(report: Report): Observable<any> {
    return this.http.post(this.apiUrl, report);
  }

  getReports(): Observable<Report[]> {
    return this.http.get<Report[]>(this.apiUrl);
  }
}
