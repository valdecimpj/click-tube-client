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
  public clickedVideoId:number;
  public loadingVideos:boolean

  constructor(private videosService:VideosService, private usersService:UsersService) {
    this.videos = [];
    this.loadingVideos = false;
    this.usersService.onSessionsUserReset.subscribe(()=>this.refreshVideos())
    this.clickedVideoId = -1;
  }

  ngOnInit(): void {
    this.refreshVideos()
  }

  public refreshVideos() {
    this.loadingVideos = true;
    this.videosService.getAllVideos().subscribe(listOfVideos => {
      this.videos = listOfVideos
      this.loadingVideos = false;
    });
  }

  public clickVideo(video:VideoModel){
    this.clickedVideoId = video.id;
    var clickVideoConnectable = this.videosService.clickVideo(video);
    clickVideoConnectable.subscribe(()=>this.clickedVideoId = -1);
    clickVideoConnectable.connect();
  }

}
