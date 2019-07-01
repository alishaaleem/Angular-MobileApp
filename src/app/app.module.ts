import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule,MatMenuModule ,MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule,MatSnackBarModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AccountService } from './account.service';
import { Account } from './account';
import { AccountCashComponent } from './components/account-cash/account-cash.component';
import { HttpModule } from '@angular/http';
    import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: 'account-cash', component: AccountCashComponent}, 
  { path: '', redirectTo: 'account-cash', pathMatch: 'full'}
];


@NgModule({
  imports:[
    BrowserModule, 
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatMenuModule,
    MatSnackBarModule, HttpClientModule, HttpModule],
  declarations: [ AppComponent, AccountCashComponent],
  bootstrap:    [ AppComponent ],
  providers: [AccountService]
})
export class AppModule { }
