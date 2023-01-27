import { Component } from '@angular/core';
import { Product } from './shared/model/product.model';
import { ProductService } from './shared/service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  productList: any[] = []
  tableDetails: any[] = []
  
  constructor(private prodServe: ProductService) { }
  
  ngOnInit(): void {
    this.productList = this.prodServe.getProduct()
  }
  decreaseQuantity(product:any) {
    console.log(product)
    console.log(product.prodQua)
    if( product.prodQua != 1)
    product.prodQua -= 1
  }
  increaseQuantity(product:any) {
    console.log(product)
    console.log(product.prodQua)
    product.prodQua += 1
  }
  
  addProductDetail(bagDetail: any) {
    console.log(bagDetail)
    let id = bagDetail.prodId
    let index = this.tableDetails.findIndex(res => res.prodId == id)
    if (index == -1) {
      this.tableDetails.push(bagDetail)
    }
    console.log(this.tableDetails)
  }

  setTotal() {
    return this.tableDetails.map(t => t.prodPrice * t.prodQua).reduce((acc, value) => acc + value , 0)
  }
}
