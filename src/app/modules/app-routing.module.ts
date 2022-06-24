import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auths/login/login.component';
import { AuthguardService } from '../services/authguard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    loadChildren: () => import('../adminpanel/adminpanel.module').then(m => m.AdminpanelModule),
    canActivate: [AuthguardService]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthguardService]
})
export class AppRoutingModule { }
