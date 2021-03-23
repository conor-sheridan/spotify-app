import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {  
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
]
@NgModule({
  declarations: [],
  imports: [
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    MaterialModule,
    RouterModule
  ]
})
export class AppRoutingModule { }
