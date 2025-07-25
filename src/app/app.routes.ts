import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: '/nurse', pathMatch: 'full'},
    {path: 'nurse', loadComponent: () => import('./component-nurse/component-nurse').then(m => m.ComponentNurse)},
    {path: 'patient', loadComponent: () => import('./component-patient/component-patient').then(m => m.ComponentPatient)},
    {path: 'report', loadComponent: () => import('./component-report/component-report').then(m => m.ComponentReport)},
];
