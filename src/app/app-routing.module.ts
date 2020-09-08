import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
const routes:Routes = [
    { path: '', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
]
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false, onSameUrlNavigation: 'reload'})],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  }