import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule} from '@angular/fire/compat';
import { AngularFirestoreModule,SETTINGS } from '@angular/fire/compat/firestore';
import {environment} from 'src/environments/environment';
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [AppComponent,],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
    HttpClientModule,FormsModule,AngularFireModule.initializeApp(environment.firebase),AngularFirestoreModule.enablePersistence()],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
  {provide:SETTINGS, useValue:{}}],
  
  bootstrap: [AppComponent],
})
export class AppModule {}
