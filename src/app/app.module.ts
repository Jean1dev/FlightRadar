import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2'
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AirshipProvider } from '../providers/airship/airship';
import { HttpClientModule } from '@angular/common/http';


const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyBTF8VlDFbLknBBRuO5fKxiJ1kNyjcrsXU",
  authDomain: "neuraapp-d16f5.firebaseapp.com",
  databaseURL: "https://neuraapp-d16f5.firebaseio.com",
  storageBucket: "neuraapp-d16f5.appspot.com",
  messagingSenderId: "234137561137"
}

@NgModule({
  declarations: [
    MyApp, 
    HomePage,
    ListPage
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAppConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AirshipProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
