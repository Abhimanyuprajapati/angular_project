import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],  // because we are using ngModel
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
  name: string = "angular";
  text: string = "learning angular";

  imageUrl : string = "https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg"

  randomName = "";
   
  onSave(){
    alert("Data saved successfully!");
  }

  onChange(){
    alert("country has changed successfully!");
  }
}
