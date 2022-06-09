import { Component, OnInit } from '@angular/core';
import { TagInterestModel } from 'src/app/models/tag-interest.model';
import { UserShareableInformationModel } from 'src/app/models/user-shareable-information.model';
import { VideosService } from 'src/app/videos/videos.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  public userInfo?:UserShareableInformationModel

  constructor(private usersService:UsersService, private videosService:VideosService) {
    this.usersService.onSessionsUserReset.subscribe(()=>this.refreshUserInfo());
    this.videosService.onVideosUpdated.subscribe(() => this.refreshUserInfo());
  }

  ngOnInit(): void {
    this.refreshUserInfo()
  }

  private refreshUserInfo() {
    this.usersService.getUsersInformationFromSession().subscribe(userInfo => this.userInfo = userInfo);
  }

  public sortTagsByInterest(tagA:TagInterestModel, tagB:TagInterestModel){
    return tagB.interestAmount - tagA.interestAmount;
  }

  public resetSessionsUser(){
    this.usersService.resetSessionsUserInformation();
  }
}
