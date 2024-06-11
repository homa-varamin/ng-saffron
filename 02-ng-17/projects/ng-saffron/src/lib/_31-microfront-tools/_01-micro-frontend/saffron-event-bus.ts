import { Injectable } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { SaffronMicrofrontendRoute } from './models/saffron-microfrontend-route';
import { ReplaySubject, firstValueFrom } from 'rxjs';
import { SaffronLoadRemoteModule } from './utils/saffron-federation-utils';

@Injectable({ providedIn: 'root' })
export class SaffronEventBus {
  public dynamicRoutes = new ReplaySubject<SaffronMicrofrontendRoute[]>(1);
  public staticRoutes = new ReplaySubject<Route[]>(1);

  constructor(private router: Router) {}

  public resetAppRoutes(): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      const dyRoutes = await firstValueFrom(this.dynamicRoutes);
      const stRoutes = await firstValueFrom(this.staticRoutes);
      const lazyRoutes = this.buildLazyRoutes(stRoutes, dyRoutes);
      this.router.resetConfig(lazyRoutes);
      resolve();
    });
  }

  private buildLazyRoutes(
    staticRoutes: Route[],
    dynamicRoutes: SaffronMicrofrontendRoute[]
  ): Routes {
    const dynRoutes: Routes = dynamicRoutes.map(
      (route: SaffronMicrofrontendRoute) => ({
        path: route.routePath,
        loadChildren: () =>
          SaffronLoadRemoteModule(route).then(
            (module: any) => module[route.ngModuleName]
          ),
      })
    );

    return [...staticRoutes, ...dynRoutes];
  }
}
