import { Component, OnInit} from '@angular/core';
import { LoginService} from '../services/login.service';
import { FilterPipe } from '../pipes/filter.pipe';
 import { FormsModule }from '@angular/forms';
import { DataService } from '../services/data.service';



@Component({

  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

 
  
productsList :any; 
filterproducts="";
quantity:any;
Cart: any= [];
match:boolean;


agregar(product,cantidad){
  if(cantidad==null || cantidad==undefined || cantidad == 0){
    alert('Seleccione una Cantidad');
    return
  }

  let ProductOnCart = {
    id:product._id,
    name: product.name,
    price: product.price,
    stock:product.stock,
    img:product.img,
    onCart:cantidad
  }

  if(this.Cart == "" || this.Cart == undefined || this.Cart == null){
    this.Cart.push(ProductOnCart);
    console.log(this.Cart);
  }
  else{
    for(let i = 0; i < this.Cart.length; i++){
      if(ProductOnCart.name == this.Cart[i].name){
        this.Cart[i].onCart = parseInt(this.Cart[i].onCart) + parseInt(cantidad);
        this.match = true;
        console.log(this.Cart)
      }
    }
    if(this.match == false){
      this.Cart.push(ProductOnCart);
      console.log(this.Cart);
    } 
    
       
  }
  
 
  this.dataService.OnCart = this.Cart;
  this.dataService.cartChip = this.Cart.length ;
  this.match = false;
}


  constructor(public LoginService : LoginService, private dataService:DataService) { }
  
  
  ngOnInit(){
    this.dataService.cartChip ="";
    this.LoginService.getProducts()
    .subscribe(res=>{
      if(res){
     this.productsList = res;
      }
    })
    
    
  }

}
