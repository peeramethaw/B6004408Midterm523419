import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  productForm1 = new FormGroup({
    type1: new FormControl(''),
    id1: new FormControl(''),
    name1: new FormControl(''),
    detail1: new FormControl(''),
    quantity1: new FormControl(''),
    price1: new FormControl('')


  });

  constructor() {

   }

  ngOnInit(): void {
  }

  addp(){
   
  }

}
