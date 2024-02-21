import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/Home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { CategoryComponent } from './components/category/category.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

export const routes: Routes = [
    {  path: '', component: HomeComponent },
    { path: 'Home', component: HomeComponent },
    { path: 'Category', component: CategoryComponent },
    { path:'About', component: AboutComponent},
    { path: "Login", component: LoginComponent },
    { path:"Sign up", component: SignupComponent },
    { path: '**', component: Error }
];
