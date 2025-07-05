import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'contact',
    renderMode: RenderMode.Client,
  },
  {
    path: 'technologie',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'over-ons',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'diensten',
    renderMode: RenderMode.Prerender,
  },
];
