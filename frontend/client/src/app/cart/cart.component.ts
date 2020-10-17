import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LoginService} from '../services/login.service';
import{DataService} from'../services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

updateProduct(){

  if(this.total !=0){
    for(let i = 0; i< this.productsOnCart.length; i++){
      let stock = this.productsOnCart[i].stock-this.productsOnCart[i].onCart;
      this.LoginService.putProduct(this.productsOnCart[i].id,stock)
      .subscribe(res=>{
        if(res){
      console.log('ok');
        }
      })
    }
  }else{
    
    alert('El carrito està vacio');
  }
  
}

calculate(){
  for(let i = 0; i< this.productsOnCart.length; i++){
    this.total = this.total + (this.productsOnCart[i].price * this.productsOnCart[i].onCart);
    
  }
  return this.total;
}

productsList:any;
productModal:any;
id:any;
quantity:any;
productsOnCart = this.dataService.OnCart;
total : number = 0;

  constructor(public LoginService : LoginService, public dataService : DataService  ) { }

  ngOnInit() {
    this.calculate();
  }

}
