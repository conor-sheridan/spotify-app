import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SpotifyService } from '../../services/spotify.service';
import { AddTokenData } from '../../store/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tokenData: {};

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
        this.store.select(state => state).subscribe(data=> {
          if(!data['elements']['tokenData']) {
            this.router.navigate(['/login'])
          } else {
            console.log(data['elements']['tokenData'])
            this.spotifyService.fetchMe(data['elements']['tokenData']).subscribe((data: any) => {
              console.log(data)
            })
          }
        })
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
