import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserShareableInformationModel } from '../models/user-shareable-information.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public onSessionsUserReset:EventEmitter<void>

  constructor(private httpClient:HttpClient) {
    this.onSessionsUserReset = new EventEmitter<void>()
  }

  public getUsersInformationFromSession():Observable<UserShareableInformationModel>{
    return this.httpClient.get<UserShareableInformationModel>(`${environment.clickTubeServerAddress}/users`, {withCredentials:true});
  }

  public resetSessionsUserInformation():Observable<void>{
    return this.httpClient.delete<void>(`${environment.clickTubeServerAddress}/users`, {withCredentials:true})
      .pipe(observable=>{
        this.onSessionsUserReset.emit()
        return observable;
      });
  }
}
