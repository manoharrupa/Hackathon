import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomerAccountsComponent } from './components/home/customer-accounts/customer-accounts.component';
import { SavingsAccountsComponent } from './components/home/savings-accounts/savings-accounts.component';
import { LoanAccountsComponent } from './components/home/loan-accounts/loan-accounts.component';
import { CustomerCountComponent } from './components/home/customer-count/customer-count.component';
import { TotalCustomerComponent } from './components/home/total-customer/total-customer.component';
import { LoanProductsComponent } from './components/home/loan-products/loan-products.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterBarComponent,
    LoginPageComponent,
    HomeComponent,
    CustomerAccountsComponent,
    SavingsAccountsComponent,
    LoanAccountsComponent,
    CustomerCountComponent,
    TotalCustomerComponent,
    LoanProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
