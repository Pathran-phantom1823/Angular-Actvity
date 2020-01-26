import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from "./form/form.component";
import { ParentComponent } from "./parent/parent.component";
import { SenderComponent } from "./sender/sender.component";
import { TemplateDrivenComponent } from "./template-driven/template-driven.component";
import { DataDrivenComponent } from "./data-driven/data-driven.component";
import { ParentFormComponent } from "./parent-form/parent-form.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RegisterFormComponent } from "./register-form/register-form.component";
import { ViewComponent } from "./view/view.component";
import { ErrorComponent } from "./error/error.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'registerform', component: RegisterFormComponent },
  { path: 'view/:id', component: ViewComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '' },
  { path: 'activity3', component: FormComponent },
  { path: 'activity4', component: ParentComponent },
  { path: 'activity5', component: SenderComponent },
  { path: 'activity71', component: TemplateDrivenComponent },
  { path: 'activity72', component: DataDrivenComponent },
  { path: 'project1', component: ParentFormComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
