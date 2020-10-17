import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LoginService} from '../services/login.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  productsList:any;
  id:any;
  result:any;
  productModal:any;
  constructor(public LoginService : LoginService,private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.LoginService.getProducts()
    .subscribe(res=>{
      if(res){
     this.productsList = res;
    console.log(this.id, this.productsList);
    this.productModal = this.productsList.filter(product => product._id === this.id);
      }
    })

     this.rutaActiva.params
     .subscribe((params:Params)=>{
       this.id = params.id
     });

     
     
  }


}
