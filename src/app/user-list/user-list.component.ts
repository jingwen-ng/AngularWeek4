import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = []
 
  constructor(private userService: UserService,private route: ActivatedRoute) { }

  ngOnInit() {
     this.getUsers()
  }

  getUsers(){
   
    const username = this.route.snapshot.params.username
    this.userService.getUsers().subscribe(response => {
     
      console.log(response)
      //  console.log(username)
      let i = 0
      let userResults = []
      for (let a of response) {
        // a=response[i]
        //  userResults.push(a[i])
        userResults.push(response[i])

        
        i++;
        
      }
      this.users = userResults
       debugger
    });

   

  }
}
