import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserState } from '../../store/reducers/userInfo.reducer'
import { getSelectedUserInfo } from '../../store/selectors/userInfo.selector';
import { Store, State } from '@ngrx/store';
import { RemoveUserInfo, RemoveMusicData, RemoveTokenData } from '../../store/actions';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  selectedUserState$: Observable<UserState>;
  userName: '';

  constructor(
    private router: Router,
    private store: Store<{ElementsState}>,
    private state: State<{ElementsState}>,
    private spotifyService: SpotifyService
  ) {
  }

  ngOnInit(): void {
    this.selectedUserState$ = this.store.select<any>(getSelectedUserInfo);
    this.selectedUserState$.subscribe(user => {
      this.userName = user['id']
    });
  }

  userPresent() {
    if(this.router.getCurrentNavigation() && this.router.getCurrentNavigation().extras.state.display_name)
      return true
    return false
  }

  public toolbarLogin(): void {
    this.spotifyService.getToken()
  }

  logout() {
    this.store.dispatch(new RemoveUserInfo());
    this.store.dispatch(new RemoveMusicData());
    this.store.dispatch(new RemoveTokenData());
    this.router.navigate(['/login']);
  }
}
