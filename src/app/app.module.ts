import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProfileComponent } from './pages/components/profile/profile.component';
import { ProfilesComponent } from './pages/components/profiles/profiles.component';
import { SharedModule } from './shared/shared.module';
import { ProfileModalComponent } from './pages/components/profile-modal/profile-modal.component';
import { FilterPipe } from './pipes/filter.pipe';
import { TokenInterceptor } from './token-interceptor';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfilesComponent,
    ProfileModalComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    NgbModule
  ],
  exports:[
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:TokenInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
