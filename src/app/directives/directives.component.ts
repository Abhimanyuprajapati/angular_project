import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { DataBindingComponent } from '../data-binding/data-binding.component';

@Component({
  selector: 'app-directives',
  imports: [
    // DataBindingComponent    // this is the way to import a component in another component
    CommonModule,      // CommonModule is imported to use ngIf, ngFor, etc.
    FormsModule
  ],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  isChecked: boolean = false;
  isInputField: boolean = true

  inputValue1: string= "";
  inputValue2: string= "";

  onClick() {
    this.isChecked = !this.isChecked;
  }

  show(){
this.isInputField = true;
  }

  hide(){
this.isInputField = false;
  }

  

}
