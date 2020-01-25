import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/users';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RequestService {
  url = 'https://jsonplaceholder.typicode.com/users'

  public dataOfUser: Array<User>;
  // public name: string;
  // public username:string;
  // public email:string;
  // public website:string;


  constructor(private http: HttpClient) { }

  // public getUsers(id:number){

  // }

  public getAllUsers():Observable<any>{
    return this.http.get(this.url)
  }

  public deleteUser(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }

  public createUser(user:any){
    return this.http.post(`${this.url}/`,user);
  }

  public updateUser(user, id:any){
    // console.log(id)
    return this.http.put(`${this.url}/${id}`,user);
}

  public getUser(id){
    return this.http.get(`${this.url}/${id}`)
  }

  public getParams(params){
    return this.http.get(`${this.url}/${params}`)
  }


}
