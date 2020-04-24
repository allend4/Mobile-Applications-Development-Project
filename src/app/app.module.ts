import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; // http
import { IonicStorageModule } from '@ionic/storage'; // ionic storage module
import { FormsModule } from '@angular/forms'; // 2 way binding
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx'; // inapp browser
import { Geolocation } from '@ionic-native/geolocation/ngx'; // geo location

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    HttpClientModule, IonicStorageModule.forRoot(), FormsModule], // ionic storage module forroot
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    InAppBrowser, // ionic plugin
    Geolocation  // ionic plugin
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
