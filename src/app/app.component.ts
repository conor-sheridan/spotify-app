import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from './services/spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private spotifyService: SpotifyService) {}
  title = 'spotify-app';
  
  ngOnInit() {
    this.spotifyService.getToken()
  }
}
