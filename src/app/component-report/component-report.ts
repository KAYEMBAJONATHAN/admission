import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportService } from '../report-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component-report',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './component-report.html',
  styleUrl: './component-report.css'
})
export class ComponentReport {
 form: FormGroup;

  constructor(private fb: FormBuilder, private reportService: ReportService) {
    this.form = this.fb.group({
      title: [''],
      content: [''],
      createdBy: ['']
    });
  }

  submit() {
    this.reportService.addReport(this.form.value).subscribe(() => {
      alert('✅ Report submitted successfully!');
      this.form.reset();
    });
  }
}
