import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'contact',
    renderMode: RenderMode.Server
  },
  {
    path: 'ervaring',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'over-ons',
    renderMode: RenderMode.Prerender
  }
];
