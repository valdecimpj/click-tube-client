import { Component, OnInit } from '@angular/core';
import { VideoModel } from 'src/app/models/video.model';
import { UsersService } from 'src/app/users/users.service';
import { VideosService } from '../videos.service';

@Component({
  selector: 'app-videos-grid',
  templateUrl: './videos-grid.component.html',
  styleUrls: ['./videos-grid.component.css']
})
export class VideosGridComponent implements OnInit {
  public videos:VideoModel[];
  constructor(private videosService:VideosService, private usersService:UsersService) {
    this.videos = [];
    this.usersService.onSessionsUserReset.subscribe(()=>this.refreshVideos())
  }

  ngOnInit(): void {
    this.refreshVideos()
  }

  public refreshVideos() {
    this.videosService.getAllVideos().subscribe(listOfVideos => this.videos = listOfVideos);
  }

  public clickVideo(video:VideoModel){
    this.videosService.clickVideo(video);
  }

}
