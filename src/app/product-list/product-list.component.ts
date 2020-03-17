import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.styl']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  product : Product ={
    name:'phương',
    price:24.99 ,
   desc :'Vũ Hoài Phương',
   img: 'http://placehold.it/700x400',
   status:true
  }
  changeStatus(){
   this.product.status =false;
  }
  changeTitle(e){
    // this.product.name=e.target.value;
  }
}
