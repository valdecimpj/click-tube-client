import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { VideosService } from './videos/videos.service';
import { UsersService } from './users/users.service';
import { VideosGridComponent } from './videos/videos-grid/videos-grid.component';
import { UserInfoComponent } from './users/user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    VideosGridComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    VideosService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
