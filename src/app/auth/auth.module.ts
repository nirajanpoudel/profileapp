import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';

import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './components/auth/auth.component';


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
