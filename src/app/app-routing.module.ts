import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustumerComponent } from './custumer/custumer.component';
import{ HomeComponent } from './home/home.component'
import { AuthGuard } from './security/auth.guard';
import { LoginComponent } from './security/login/login.component';

const routes: Routes =
[
  {path:'',redirectTo:'home',pathMatch:'full', canActivate: [AuthGuard]},
  {path:'home',component:HomeComponent, canActivate: [AuthGuard]},
  {path:'custumer',component:CustumerComponent, canActivate: [AuthGuard]},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
