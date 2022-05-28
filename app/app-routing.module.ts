import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/layout/admin/admin.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { NoteComponent } from './admin/pages/note/note.component';
import { UserComponent } from './admin/pages/user/user.component';
import { Mylist1Component } from './admin/pages/user/mylistt/mylist.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { ViewComponent } from './user/view/view.component';
import { UserViewComponent } from './user/user.component';
// UserViewComponent
const routes: Routes = [
  {
    redirectTo: 'admin',
    pathMatch: 'full',
    path: ''
  },
  {
    redirectTo: 'user',
    pathMatch: 'full',
    path: ''
  },
  {
    component: AdminComponent,
    path: 'admin',
    children: [
      {
        redirectTo: 'dashboard',
        pathMatch: 'full',
        path: ''
      },
      {
        canActivate:[AuthGuard],
        // link đến http quản
        component: NoteComponent,
        path: 'notes'
      },
      {
        canActivate:[AuthGuard],
        // link đến http quản
        component: UserComponent,
        path: 'users'
      },
      // {
      //   // link đến http quản
      //   component: ViewComponent,
      //   path: 'user/view'
      // },
      { 
        canActivate:[AuthGuard],
        component: DashboardComponent,
        path: 'dashboard'
      },
    ]
  },

  {
    component: UserViewComponent,
    path: 'view',
    children: [
      {
        redirectTo: 'view',
        pathMatch: 'full',
        path: 'view'
      }
    ]
  },



  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
