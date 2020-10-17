import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly URL_API = 'http://localhost:3000/api/users/login';
  readonly URL_API_CREATE = 'http://localhost:3000/api/users/signup';
  readonly URL_API_GET ='http://localhost:3000/api/products/all';
  readonly URL_API_PUT ='http://localhost:3000/api/products/update/';

  constructor(private http : HttpClient) { }

  authenticateUser(form){
    return this.http.post(this.URL_API, form);
  }


  createUser(form){
return this.http.post(this.URL_API_CREATE,form);
  }

  getProducts(){
    return this.http.get(this.URL_API_GET);
  }

  putProduct(id,stock){
    return this.http.put(this.URL_API_PUT+`${id}`,{stock:stock});
  }
}
