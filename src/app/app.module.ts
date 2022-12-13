import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

//COMPONENTS
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

//FIREBASE
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { AppRoutingModule } from './app.routing.module';
import { TabbarComponent } from './components/tabbar/tabbar.component';
import { SccontrolltableComponent } from './components/sccontrolltable/sccontrolltable.component';
import { SCcontrolComponent } from './components/sccontrol/sccontrol.component';
import { QCControllerComponent } from './components/qccontroller/qccontroller.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    TabbarComponent,
    SccontrolltableComponent,
    SCcontrolComponent,
    QCControllerComponent,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
