import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.scss'
})
export class LifecycleComponent implements OnChanges, OnInit{
// constructor is the first life cycle 
// means it will run first (it will mount first with dom)

constructor (){
console.log("on mounting constructor called first")
}

// to implement ngOnChanges() we have to implement on export class classname lifecycle {}
ngOnChanges(changes: SimpleChanges): void {
  console.log("1. ngOnChanges is called");
}

ngOnInit(): void {
   console.log("2. ngOnInit is called");
}

}
