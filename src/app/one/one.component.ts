import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../shared/model/product.model';
import { ProductService } from '../shared/service/product.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  myProductName: FormGroup | any

  constructor(private prodServe:ProductService) { }

  ngOnInit(): void {
    this.myProductName = new FormGroup({
      productImg: new FormControl('', [Validators.required]),
      productName: new FormControl('', Validators.required),
      productPrice: new FormControl('', Validators.required),
      prodQua: new FormControl('', Validators.required)
    })
  }
  onSubmit() {
    console.log(this.myProductName)
    const newProduct = new Product(this.myProductName.value.productImg, this.myProductName.value.productName, this.myProductName.value.productPrice, this.myProductName.value.prodQua, this.myProductName.value.prodId)
    console.log(newProduct)
    //this.prodServe.newProduct(newProduct)
  }
  
}
