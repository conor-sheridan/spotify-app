import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SpotifyService } from '../../services/spotify.service';
import { AddTokenData, AddUserInfo, GetTokenData, GetUserInfo } from '../../store/actions';
import { UserState } from '../../store/reducers/userInfo.reducer'
import { TokenState } from '../../store/reducers/tokenData.reducer';
import { getSelectedUserInfo } from '../../store/selectors/userInfo.selector';
import { getSelectedTokenData } from 'src/app/store/selectors/tokenData.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tokenData: {};
  userInfoState$: Observable<UserState>; 
  tokenDataState$: Observable<TokenState>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService,
    private store: Store<{state}>
    ) {}

  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe((fragment: String) => {
      if(fragment) {
        fragment = JSON.parse('{\"' + fragment.split('=').join('\":\"').split('&').join('\",\"') + '\"}')
        this.store.dispatch(new AddTokenData(fragment));
        this.router.navigate(['/home'])
      } else {
        this.tokenDataState$ = this.store.select<any>(getSelectedTokenData);
        this.store.dispatch(new GetTokenData());
        console.log(this.tokenDataState$);
        // this.store.select(state => state).subscribe(state=> {
        //   if(!state['elements']['tokenData']['access_token']) {
        //     this.router.navigate(['/login'])
        //   } else {
        //     this.tokenData = state['elements']['tokenData'];
        //     console.log(state['elements']['tokenData'])
        //     this.spotifyService.fetchMe(state['elements']['tokenData']).subscribe((data: any) => {
        //       this.store.dispatch(new AddUserInfo(data));
        //       this.userInfoState$ = this.store.select<any>(getSelectedUserInfo);
        //       this.store.dispatch(new GetUserInfo());
        //       console.log(this.userInfoState$);
        //       console.log(state)
        //     })
        //   }
        // })
      }
    })
  // })
  //   this.activatedRoute.fragment.subscribe((fragment: String) => {
  //     if(fragment) {
  //       this.router.navigate(['/token'])
  //     } else if(!fragment) {
  //       // this.router.navigate(['/login'])
  //     }
  //   })
    // if(!this.tokenData) {
    //   this.router.navigate(['/login'])
    // } else {
      
    // }
  }
}
