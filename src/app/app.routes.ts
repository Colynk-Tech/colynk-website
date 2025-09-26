import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { OverOns } from './pages/over-ons/over-ons';
import { Blog } from './pages/blog/blog';
import { BlogPost } from './pages/blog/blog-post/blog-post';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'contact', component: Contact },
  { path: 'over-ons', component: OverOns },
  { path: 'blog', component: Blog },
  { path: 'blog/:id', component: BlogPost },
];
