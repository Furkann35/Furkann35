import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userId: number;
  user: User
  constructor(private toastService: ToastrService,
    private authService: AuthService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.getUserId();
    this.getByUserId(this.userId);
  }

  getUserId() {
    this.userId = this.authService.getUserId()
    console.log(this.userId)
  }



  getByUserId(id: number) {
    this.userService.getUserById(id).subscribe(response => {
      this.user = response.data;
      console.log(this.user)
    })
  }
}
