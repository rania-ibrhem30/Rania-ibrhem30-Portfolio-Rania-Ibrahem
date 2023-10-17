import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { ServiceComponent } from './service/service.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AngularComponent } from './angular/angular.component';
import { JsComponent } from './js/js.component';
import { TemplatesComponent } from './templates/templates.component';
import { JavaScriptComponent } from './java-script/java-script.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectComponent,
    ServiceComponent,
    NavbarComponent,
    HomeComponent,
    AngularComponent,
    JsComponent,
    TemplatesComponent,
    JavaScriptComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
