import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/layout/admin/admin.component';
import { FooterComponent } from './admin/layout/block/footer/footer.component';
import { HeaderComponent } from './admin/layout/block/header/header.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { NoteComponent } from './admin/pages/note/note.component';
import { MylistComponent } from './admin/pages/note/mylist/mylist.component';
import { MyformComponent } from './admin/pages/note/myform/myform.component';
import { EditformComponent } from './admin/pages/note/editform/editform.component';
import { HighlightDirective } from './directives/highlight.directive';
import { MenuComponent } from './admin/layout/block/menu/menu.component';
import { UserComponent } from './admin/pages/user/user.component';
import { Mylist1Component } from './admin/pages/user/mylistt/mylist.component';
import { Myform1Component } from './admin/pages/user/myformm/myform.component';
import { Editform1Component } from './admin/pages/user/editformm/editform.component';
import { LoginComponent } from './login/login.component';
import { ViewComponent } from './user/view/view.component';
import { UserViewComponent } from './user/user.component';
@NgModule({
  declarations: [
    AppComponent,
    MyformComponent,
    FooterComponent,
    HeaderComponent,
    DashboardComponent,
    NoteComponent,
    MylistComponent,
    AdminComponent,
    EditformComponent,
    HighlightDirective,
    MenuComponent,
    UserComponent,
    Mylist1Component,
    Myform1Component,
    Editform1Component,
    LoginComponent,
    ViewComponent,
    UserViewComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
