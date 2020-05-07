import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
status: 'invalid';
  productForm = new FormGroup({
    type: new FormControl(''),
    id: new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required]),
    detail: new FormControl('',[Validators.required]),
    quantity: new FormControl('',[Validators.required, Validators.max(50), Validators.min(1)]),
    price: new FormControl('',[Validators.required, Validators.max(100000), Validators.min(1)])


  });

  productType: string[] = ['CPU','RAM','HDD','Mainboard'];

  get quantity(){
    return this.productForm.get('quantity');
  }
  constructor() { }

  ngOnInit(): void {

  }
  addProduct(){


  }

  stat(){
    if(this.productForm.invalid){
      return "INVALID"
    }else{
      return "VALID"
    }
  }


}
