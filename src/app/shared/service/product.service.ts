import { Product } from "../model/product.model";

export class ProductService{
    private productList = [
        new Product('https://www.ghirardelli.com/media/wysiwyg/GCC_home_bar.jpg', 'product 1', '9.00', 1,1),
        new Product('https://www.bigbasket.com/media/uploads/p/l/40018533-2_10-nestle-classic-milk-chocolate-candy.jpg', 'product 2', '9.00', 1,2),
        new Product('https://5.imimg.com/data5/XG/UY/NR/ANDROID-27272597/prod-20200729-003118895784010563320414-jpg-1000x1000.jpg', 'product 3', '9.00', 1,3)
    ]
    tableDetails:any[]=[]
    
    getProduct() {
       return this.productList
    }
    newProduct(product: any) {
        this.productList.push(product)
        console.log(this.productList)
    }
    addBagDetails(details: any) {
       this.tableDetails.push(details)
   }
}