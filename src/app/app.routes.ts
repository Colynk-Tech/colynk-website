import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { OverOns } from './pages/over-ons/over-ons';
import { Experience } from './pages/experience/experience';
import { Diensten } from './pages/diensten/diensten';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'contact', component: Contact },
  { path: 'over-ons', component: OverOns },
  { path: 'technologie', component: Experience },
  { path: 'diensten', component: Diensten }
];
