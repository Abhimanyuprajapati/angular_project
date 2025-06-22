import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { DataBindingComponent } from '../data-binding/data-binding.component';

@Component({
  selector: 'app-directives',
  imports: [
    // DataBindingComponent
    CommonModule
  ],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  isChecked: boolean = false;

  onClick() {
    this.isChecked = !this.isChecked;
  }

}
