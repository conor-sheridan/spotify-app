import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, State } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SpotifyService } from '../../services/spotify.service';
import { AddTokenData, AddUserInfo, GetTokenData, GetUserInfo } from '../../store/actions';
import { UserState } from '../../store/reducers/userInfo.reducer'
import { TokenState } from '../../store/reducers/tokenData.reducer';
import { getSelectedUserInfo } from '../../store/selectors/userInfo.selector';
import { getSelectedTokenData } from '../../store/selectors/tokenData.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tokenData: {};
  userName: '';

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
        this.router.navigate(['/home'])
      } else {
        if(!this.state.getValue().elements.tokenData.access_token) {
            this.router.navigate(['/login'])
        } else {
          this.tokenData = this.state.getValue().elements.tokenData
          console.log(this.tokenData)
          this.spotifyService.fetchMe(this.tokenData).subscribe((data: any) => {
            this.userName = data.id;
            this.store.dispatch(new AddUserInfo(data));
            console.log(this.state.getValue());
          })
        }
      }
    })
  }
}
