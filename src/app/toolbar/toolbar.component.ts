import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  constructor(
    private router: Router,
  ) {}

  userPresent() {
    if(this.router.getCurrentNavigation() && this.router.getCurrentNavigation().extras.state.display_name)
      return true
    return false
  }
}
