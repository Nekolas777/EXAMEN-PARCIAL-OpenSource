import { Routes } from '@angular/router';
import {TheHomePageComponent} from "./public/pages/the-home-page/the-home-page.component";
import {TheNotfoundPageComponent} from "./public/pages/the-notfound-page/the-notfound-page.component";
import {
  MentalStateExamsPageComponent
} from "./mental-state-exams/pages/mental-state-exams-page/mental-state-exams-page.component";

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component:TheHomePageComponent},
  {path:'nursing/mental-state-exams', component: MentalStateExamsPageComponent},
  {path:'**', component:TheNotfoundPageComponent}
];
