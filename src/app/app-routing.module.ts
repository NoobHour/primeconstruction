

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }


/* import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ComponentsComponent } from './components/components.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AuthGuard } from './_helpers';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent, data: { text: 'Home', icon: 'home' } },
  { path: 'components', component: ComponentsComponent, data: { text: 'Components', icon: 'web' } },
  { path: 'contacts', component: ContactsComponent, data: { text: 'Contacts', icon: 'subject' } },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
*/