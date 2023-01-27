export class Product{
    prodImg: string;
    prodName: string;
    prodPrice: string;
    prodQua: number
    prodId:number

    constructor(prodImg:string, prodName:string, prodPrice:string, prodQua:number, prodId:number) {
        this.prodImg = prodImg,
        this.prodName = prodName,
        this.prodPrice = prodPrice,
        this.prodQua = prodQua,
       this.prodId = prodId
    }
}