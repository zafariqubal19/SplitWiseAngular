import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { SplitExpenseComponent } from './Components/split-expense/split-expense.component';
import { HomeComponent } from './Components/home/home.component';
import { GroupComponent } from './Components/group/group.component';
import { ExpensesComponent } from './Components/expenses/expenses.component';
import { AccountComponent } from './Components/account/account.component';
import { GroupDetailsComponent } from './Components/group-details/group-details.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'Login',component:LoginComponent},
  {path:'Register',component:RegisterComponent},
  {path:'splitexpense',component:SplitExpenseComponent},
  {path:'Home',component:HomeComponent},
  {path:'Group',component:GroupComponent},
  {path:'Expenses',component:ExpensesComponent},
  {path:'Account',component:AccountComponent},
  {path:'GroupDetails/:GroupId/:CreatorId',component:GroupDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
