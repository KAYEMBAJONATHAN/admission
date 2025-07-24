import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentNurse } from "./component-nurse/component-nurse";
import { ComponentPatient } from "./component-patient/component-patient";
import { ComponentReport } from "./component-report/component-report";
import { Navbar } from "./navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponentNurse, ComponentPatient, ComponentReport, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('admission');
}
