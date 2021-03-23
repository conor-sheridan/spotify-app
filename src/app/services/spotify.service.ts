import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class SpotifyService {
    constructor(private http: HttpClient, private router: Router){}
    
    AUTHORIZE_URL = 'https://accounts.spotify.com/authorize/';

    client_id = 'ccdce01d0db94d54bd999b45444ba5d0';
    redirect_uri = 'http://localhost:4200/home';
    scope = 'user-library-read user-library-modify playlist-modify-public user-top-read playlist-modify-public user-modify-playback-state user-follow-modify user-read-currently-playing user-read-playback-state user-follow-read app-remote-control streaming user-read-email user-read-private';
    show_dialog = false;

    getToken() {
        window.location.href = 'https://accounts.spotify.com/authorize/?client_id=' + this.client_id + '&response_type=token&redirect_uri=' + encodeURI(this.redirect_uri) + '&scope=' + encodeURI(this.scope) + '&state=34fFs29kd09&show_dialog%3A%20true';
    }

    fetchMe(fragment) {
        return this.http.get('https://api.spotify.com/v1/me', {headers: {'Authorization': fragment.token_type + ' ' + fragment.access_token}})
    }

}