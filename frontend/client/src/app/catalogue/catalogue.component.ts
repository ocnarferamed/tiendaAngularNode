import { Component, OnInit } from '@angular/core';
import { LoginService} from '../services/login.service';



@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
 productsList :Object;
 col1 :Object[] = [];
 col2 :Object[]= [];
 col3 :Object[]= [];
 
  constructor(public LoginService : LoginService) { }

  ngOnInit(){
    this.LoginService.getProducts()
    .subscribe(res=>{
      if(res){
     this.productsList = res;
     for (let index = 0; index < 7; index++) {
        this.col1.push(this.productsList[index]);
     }
     for (let index = 0; index < 14; index++) {
      this.col2.push(this.productsList[index]);
    }
    for (let index = 0; index < 21; index++) {
      this.col3.push(this.productsList[index]);
    }

      console.log(this.productsList);
      }
    })
  }

}
