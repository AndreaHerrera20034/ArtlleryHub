import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { HomeComponent } from './components/Home/home.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    {  path: '', component: HomeComponent },
    { path: 'Home', component: HomeComponent },
    { path: 'Sobre mi', component: AboutComponent },
    { path: 'Proyectos', component: ProjectsComponent },
    { path: 'Crear proyecto', component: CreateComponent },
    { path: '**', component: Error }
];
