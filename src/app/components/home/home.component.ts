import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Store, State } from '@ngrx/store';

import { SpotifyService } from '../../services/spotify.service';
import { AddMusicData, AddTokenData, AddUserInfo } from '../../store/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  tokenData: {};
  artistsLoading: boolean = true;
  topArtists: {};
  userName: '';
  dataSource: [];
  displayedColumns: string[] = ['name', 'popularity'];
  expandedElement: Object | null;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService,
    private store: Store<{ElementsState}>,
    private state: State<{ElementsState}>
    ) {}

  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe((fragment: String) => {
      if(fragment) {
        fragment = JSON.parse('{\"' + fragment.split('=').join('\":\"').split('&').join('\",\"') + '\"}')
        this.store.dispatch(new AddTokenData(fragment));
        console.log('Added token data', this.state.getValue());
        this.router.navigate(['/home'])
      } else {
        if(!this.state.getValue().elements.tokenData.access_token) {
            this.router.navigate(['/login'])
        } else {
          this.tokenData = this.state.getValue().elements.tokenData
          this.fetchUserData();
          this.fetchTopArtists();
        }
      }
    })
  }
  fetchUserData() {
    this.spotifyService.fetchMe(this.tokenData).subscribe((data: any) => {
      this.userName = data.id;
      this.store.dispatch(new AddUserInfo(data));
      console.log('Added user info', this.state.getValue());
    })
  }

  fetchTopArtists() {
    this.spotifyService.fetchTopArtists(this.tokenData).subscribe((data: any) => {
      this.topArtists = data;
      this.store.dispatch(new AddMusicData(data));
      this.dataSource = this.topArtists['items'];
      this.artistsLoading = false;
      console.log('Added top artists', this.state.getValue());
      console.log(this.dataSource)
    })
  }
}
