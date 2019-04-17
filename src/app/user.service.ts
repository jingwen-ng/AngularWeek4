import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute } from '@angular/router'

const usersUrl = 'https://insta.nextacademy.com/api/v1/users'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
 
    return this.http.get(usersUrl)
   
  }

  getUserImages(userId) {
      // userId = 3;
      // userId = this.route.snapshot.params.userId
     debugger
    return this.http.get('https://insta.nextacademy.com/api/v1/images/?userId=' + `${userId}`)
    debugger
    }
    
}
