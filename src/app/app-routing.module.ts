import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { ContactComponent } from './contact/contact.component';
import { JavaScriptComponent } from './java-script/java-script.component';
import { ProjectComponent } from './project/project.component';
import { TemplatesComponent } from './templates/templates.component';

const routes: Routes = [
  {path : '' , component:ProjectComponent, children:[
  { path: '', component: AngularComponent },
  { path: 'Angular', component: AngularComponent },
  { path: 'JavaScript', component:JavaScriptComponent },
  { path: 'Templates', component: TemplatesComponent },
]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
