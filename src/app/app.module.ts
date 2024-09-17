import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatStepperModule} from "@angular/material/stepper";
import {CropsStepperContentComponent} from "./management/components/stepper-content/stepper-content.component";
import {HttpClientModule} from "@angular/common/http";
import {NgOptimizedImage} from "@angular/common";
import {OverlayModule} from "@angular/cdk/overlay";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {
  CropsStep1CardContentComponent
} from './management/components/step1-card-content/step1-card-content.component';
import {
  CropsStep2CardContentComponent
} from './management/components/step2-card-content/step2-card-content.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {
  CropsStep3CardContentComponent
} from './management/components/step3-card-content/step3-card-content.component';
import {MatDialogModule} from "@angular/material/dialog";
import {CropsDialogContentComponent} from './management/components/dialog-content/dialog-content.component';
import {SalesStepperContentComponent} from "./shopping/components/stepper-content/stepper-content.component";
import {SalesStep1CardContentComponent} from './shopping/components/step1-card-content/step1-card-content.component';
import {SalesStep2CardContentComponent} from './shopping/components/step2-card-content/step2-card-content.component';
import {SalesStep3CardContentComponent} from './shopping/components/step3-card-content/step3-card-content.component';
import {SaleDialogContentComponent} from './shopping/components/sale-dialog-content/dialog-content.component';
import {OrdersService} from "./shopping/services/orders.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDividerModule} from '@angular/material/divider';
import {ButtonContentComponent} from './finance/components/cost-button-content/button-content.component';
import {Button2ContentComponent} from './finance/components/profit-button-content/button2-content.component';
import {TransactionsListContentComponent} from './finance/pages/transactions-list-content/transactions-list-content.component';
import {NewTransactionDialogContentComponent} from './finance/components/new-transaction-dialog-content/new-transaction-dialog-content.component';
import {CostsGalleryContentComponent} from './finance/pages/costs-gallery-content/costs-gallery-content.component';
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from "@angular/material/table";
import {MatMenuModule} from "@angular/material/menu";
import {ProfitsGalleryContentComponent} from './finance/pages/profits-gallery-content/profits-gallery-content.component';
import {FarmerNavigationComponent} from './shared/components/farmer-navigation/farmer-navigation.component';
import {SignInComponent} from './authentication/components/sign-in/sign-in.component';
import {SignUpComponent} from './authentication/components/sign-up/sign-up.component';

import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {SelectRolComponent} from './authentication/components/select-rol/select-rol.component';
import {
  FarmerMainContentComponent
} from './authentication/components/home/farmer-home/components/farmer-main-content/farmer-main-content.component';
import {
  MerchantMainContentComponent
} from './authentication/components/home/merchant-home/components/merchant-main-content/merchant-main-content.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {
  ProductInformationContentComponent
} from "./management/pages/product-information-content/product-information-content.component";
import {ProductsGalleryContentComponent} from "./management/pages/products-gallery-content/products-gallery-content.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {ProductCardContentComponent} from "./management/components/product-card-content/product-card-content.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import { OrderCardContentComponent } from './shopping/components/order-card-content/order-card-content.component';
import { OrdersGalleryContentComponent } from './shopping/pages/orders-gallery-content/orders-gallery-content.component';
import { CancelPurchaseDialogContentComponent } from './shopping/components/cancel-purchase-dialog-content/cancel-purchase-dialog-content.component';
import { OrderInformationContentComponent } from './shopping/pages/order-Information-content/order-information-content.component';
import { NewProductFormContentComponent } from './management/components/new-product-form-content/new-product-form-content.component';
import {RatesGalleryContentComponent} from "./shopping/pages/rates-gallery-content/rates-gallery-content.component";
import { RateCardContentComponent } from './shopping/components/rate-card-content/rate-card-content.component';
import { SaleCardContentComponent } from './shopping/components/sale-card-content/sale-card-content.component';
import { SalesGalleryContentComponent } from './shopping/pages/sales-gallery-content/sales-gallery-content.component';
import { NewSaleFormContentComponent } from './shopping/components/new-sale-form-content/new-sale-form-content.component';
import { SaleInformationContentComponent } from './shopping/pages/sale-information-content/sale-information-content.component';
import { OrderRequestsContentComponent } from "./shopping/pages/order-requests-content/order-requests-content.component";
import { MerchantNavigationComponent } from './shared/components/merchant-navigation/merchant-navigation.component';
import {OrderDialogContentComponent} from "./shopping/components/order-dialog-content/order-dialog-content.component";
import {RateDialogContentComponent} from "./shopping/components/rate-dialog-content/rate-dialog-content.component";
import {MatSortModule} from "@angular/material/sort";
import {authInterceptorProviders} from "./authentication/helpers/AuthInterceptor";
import { ContactDialogComponent } from './authentication/components/contact-dialog/contact-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    FarmerNavigationComponent,
    SignInComponent,
    SignUpComponent,
    SelectRolComponent,
    FarmerMainContentComponent,
    MerchantMainContentComponent,
    CropsStepperContentComponent,
    CropsStep1CardContentComponent,
    CropsStep2CardContentComponent,
    CropsStep3CardContentComponent,
    CropsDialogContentComponent,
    SalesStepperContentComponent,
    SalesStep1CardContentComponent,
    SalesStep2CardContentComponent,
    SalesStep3CardContentComponent,
    SaleDialogContentComponent,
    ButtonContentComponent,
    Button2ContentComponent,
    TransactionsListContentComponent,
    NewTransactionDialogContentComponent,
    CostsGalleryContentComponent,
    ProfitsGalleryContentComponent,
    ProductInformationContentComponent,
    ProductsGalleryContentComponent,
    ProductCardContentComponent,
    OrderCardContentComponent,
    OrdersGalleryContentComponent,
    CancelPurchaseDialogContentComponent,
    OrderInformationContentComponent,
    NewProductFormContentComponent,
    RatesGalleryContentComponent,
    RateCardContentComponent,
    SaleCardContentComponent,
    SalesGalleryContentComponent,
    NewSaleFormContentComponent,
    SaleInformationContentComponent,
    OrderRequestsContentComponent,
    MerchantNavigationComponent,
    OrderDialogContentComponent,
    RateDialogContentComponent,
    ContactDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatSidenavModule,
    HttpClientModule,
    MatStepperModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    OverlayModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatDialogModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    MatDividerModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatMenuModule,
    MatGridListModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSortModule,
  ],
  providers: [OrdersService, authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
