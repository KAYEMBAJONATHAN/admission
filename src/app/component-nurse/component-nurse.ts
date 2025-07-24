import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NurseService } from '../nurse-service';

@Component({
  selector: 'app-component-nurse',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './component-nurse.html',
  styleUrl: './component-nurse.css', 
})

export class ComponentNurse {
   form: FormGroup;

  constructor(private fb: FormBuilder, private nurseService: NurseService) {
    this.form = this.fb.group({
      name: [''],
      department: [''],
      shift: ['']
    });
  }

  submit() {
    this.nurseService.addNurse(this.form.value).subscribe(() => {
      alert('✅ Nurse registered successfully!');
      this.form.reset();
    });
  }
}
