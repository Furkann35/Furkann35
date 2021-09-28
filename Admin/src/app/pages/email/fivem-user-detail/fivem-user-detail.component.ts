import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FivemUser } from 'src/app/models/fivemUser';
import { FivemUserService } from 'src/app/services/fivem-user.service';

@Component({
  selector: 'app-fivem-user-detail',
  templateUrl: './fivem-user-detail.component.html',
  styleUrls: ['./fivem-user-detail.component.scss']
})
export class FivemUserDetailComponent implements OnInit {
  fivemUser: FivemUser[] = []
  fivemUsers: FivemUser
  constructor(private fivemUserService: FivemUserService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["identifier"]) {
        this.getFivemDetailById(params["identifier"])
      }
    })
  }

  async getFivemDetailById(identifier: number) {
    this.fivemUserService.getFivemuserDetailById(identifier).subscribe(response => {
      this.fivemUser = response.data
      console.log(this.fivemUser);
    })
  }
}

