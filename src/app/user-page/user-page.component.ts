import { Component, OnInit } from '@angular/core'
import { UserService } from '../user.service'
import { ActivatedRoute } from '@angular/router'
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})

export class UserPageComponent implements OnInit {
  specificUser = null
  profilepic = []
  constructor(
    private service: UserService, 
    private route: ActivatedRoute) { }

    ngOnInit() {
     
     this.getUserImages()
    // this.service
    //     .getUserImages(this.route.snapshot.params.id)
    //     .subscribe(response => {
    //       this.specificUser = response
    //     })
    //     console.log(this.specificUser)
    //     debugger
    }


    getUserImages(){
      const userId = this.route.snapshot.params.userId
      //   const username = this.service.getUsers()
      
      //  console.log(username)
       debugger
      this.service.getUserImages(userId).subscribe(response => {
      console.log(response)
      let i = 0
      let userProfileResults = []
      for (let a of response) {
        // a=response[i]
        //  userResults.push(a[i])
        userProfileResults.push(response[i])

        
        i++;
        
      }
      this.profilepic = userProfileResults
      debugger
      })
    }
}
