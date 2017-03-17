import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import {FirebaseService} from './services/firebase.service';
import {FlashMessagesModule} from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';


export const firebaseConfig = {
  apiKey: 'AIzaSyBPwrguArYEsSIYHCKHvWIikriEKjEhuic',
  authDomain: 'mewfyhomes.firebaseapp.com',
  databaseURL: 'https://mewfyhomes.firebaseio.com',
  storageBucket: 'mewfyhomes.appspot.com',
  messagingSenderId: '405007641854'
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};


const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'listings', component:ListingsComponent},
  {path:'listing/:id', component:ListingComponent},
  {path:'add-listing', component:AddListingComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
