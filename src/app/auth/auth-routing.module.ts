import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoverComponent } from './pages/recover/recover.component';
import { authGuard } from './guards/auth.guard';
import { roleGuard } from './guards/role.guard';
import { ResetComponent } from './pages/reset/reset.component';
import { SendComponent } from './pages/send/send.component';
import { ConfirmComponent } from './pages/confirm/confirm.component';

const routes: Routes = [
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'register',
      component: RegisterComponent,
      // canActivate: [authGuard],
    },
    {
      path: 'recover',
      component: RecoverComponent,
      // canActivate: [roleGuard],
      // data: { expectedRole: 'admin'}
    },
    {
      path: 'reset/:email/:token',
      component: ResetComponent
    },
    {
      path: 'send',
      component: SendComponent
    },
    {
      path: 'confirmation/:email/:token',
      component: ConfirmComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
