import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { SplitExpenseComponent } from './Components/split-expense/split-expense.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { GroupComponent } from './Components/group/group.component';
import { ExpensesComponent } from './Components/expenses/expenses.component';
import{HttpClientModule} from '@angular/common/http';
import { AccountComponent } from './Components/account/account.component';
import { GroupDetailsComponent } from './Components/group-details/group-details.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SplitExpenseComponent,
    HomeComponent,
    NavbarComponent,
    GroupComponent,
    ExpensesComponent,
    AccountComponent,
    GroupDetailsComponent,

   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
