import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NurseService } from '../nurse-service';
import { Nurse } from '../module';

@Component({
  selector: 'app-component-nurse',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './component-nurse.html',
  styleUrl: './component-nurse.css',
})
export class ComponentNurse implements OnInit {
  form: FormGroup;
  selectedNurseId: number | null = null;
  nurses: Nurse[] = [];

  constructor(private fb: FormBuilder, private nurseService: NurseService) {
    this.form = this.fb.group({
      name: [''],
      department: [''],
      shift: [''],
    });
  }

  ngOnInit(): void {
    this.loadNurses();
  }

  submit(): void {
    const nurse = this.form.value;

    if (this.selectedNurseId) {
      this.nurseService.updateNurse(this.selectedNurseId, nurse).subscribe(() => {
        alert('✅ Nurse updated successfully!');
        this.form.reset();
        this.selectedNurseId = null;
        this.loadNurses();
      });
    } else {
      this.nurseService.addNurse(nurse).subscribe(() => {
        alert('✅ Nurse registered successfully!');
        this.form.reset();
        this.loadNurses();
      });
    }
  }

  loadNurses(): void {
    this.nurseService.getNurses().subscribe((data) => {
      this.nurses = data;
    });
  }

  selectNurse(nurse: Nurse): void {
    this.form.patchValue(nurse);
    this.selectedNurseId = nurse.id;
  }

  deleteNurse(id: number, event: Event): void {
    event.stopPropagation();
    if (confirm('Are you sure you want to delete this nurse?')) {
      this.nurseService.deleteNurse(id).subscribe(() => {
        alert('🗑️ Nurse deleted successfully!');
        this.loadNurses();
      });
    }
  }
}
