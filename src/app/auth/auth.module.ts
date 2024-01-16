import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInput, MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './pages/login/login.component';
import { FormCardComponent } from './components/form-card/form-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';  
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './pages/register/register.component';
import { RecoverComponent } from './pages/recover/recover.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { LoaderService } from '../shared/services/loader/loader.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginComponent,
    FormCardComponent,
    RegisterComponent,
    RecoverComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    ReactiveFormsModule,
  ],
  providers: [ CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:  LoaderService,
      multi: true
    }]
})

export class AuthModule { }
