import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Connectable, connectable, multicast, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { VideoModel } from '../models/video.model';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  public onVideosUpdated:EventEmitter<void>;

  constructor(private httpClient:HttpClient) {
    this.onVideosUpdated = new EventEmitter<void>();
  }

  public getAllVideos():Observable<VideoModel[]>{
    return this.httpClient.get<VideoModel[]>(`${environment.clickTubeServerAddress}/videos`, {withCredentials:true});
  }

  public clickVideo(clickedVideo:VideoModel):Connectable<void>{
    let clickVideoObservable = this.httpClient.put<void>(`${environment.clickTubeServerAddress}/videos`, {clickedVideoId:clickedVideo.id}, {withCredentials:true});
    let clickVideoConnectable = connectable(clickVideoObservable);
    clickVideoConnectable.subscribe(()=>{
      this.onVideosUpdated.emit()
      clickedVideo.views++;
    })
    return clickVideoConnectable;
  }
}
