import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientService } from '../patient-service';

@Component({
  selector: 'app-component-patient',
  imports: [FormsModule,CommonModule,ReactiveFormsModule ],
  templateUrl: './component-patient.html',
  styleUrl: './component-patient.css'
})
export class ComponentPatient {
form: FormGroup;

  constructor(private fb: FormBuilder, private patientService: PatientService) {
    this.form = this.fb.group({
      name: [''],
      age: [''],
      gender: [''],
      diagnosis: ['']
    });
  }

  submit() {
    this.patientService.addPatient(this.form.value).subscribe(() => {
      alert('✅ Patient added successfully!');
      this.form.reset();
    });
  }
}
