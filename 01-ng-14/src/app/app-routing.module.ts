import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'demo',
    loadChildren: () =>
      import(
        './../../projects/sadad-cheque-ui-component/src/lib/demo-viewer/demo-viewer.module'
      ).then((m) => m.DemoViewerModule),
  },
  {
    path: '',
    redirectTo: '/demo',
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
