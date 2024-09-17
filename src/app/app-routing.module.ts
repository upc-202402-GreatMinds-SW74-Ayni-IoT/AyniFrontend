import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInComponent} from "./authentication/components/sign-in/sign-in.component";
import {SignUpComponent} from "./authentication/components/sign-up/sign-up.component";
import {SelectRolComponent} from "./authentication/components/select-rol/select-rol.component";
import {MerchantMainContentComponent} from "./authentication/components/home/merchant-home/components/merchant-main-content/merchant-main-content.component";
import {FarmerMainContentComponent} from "./authentication/components/home/farmer-home/components/farmer-main-content/farmer-main-content.component";
import {SalesStepperContentComponent} from "./shopping/components/stepper-content/stepper-content.component";
import {CostsGalleryContentComponent} from "./finance/pages/costs-gallery-content/costs-gallery-content.component";
import {CropsStepperContentComponent} from "./management/components/stepper-content/stepper-content.component";
import {ProfitsGalleryContentComponent} from "./finance/pages/profits-gallery-content/profits-gallery-content.component";
import {TransactionsListContentComponent} from "./finance/pages/transactions-list-content/transactions-list-content.component";
import {ProductsGalleryContentComponent} from "./management/pages/products-gallery-content/products-gallery-content.component";
import {ProductInformationContentComponent} from "./management/pages/product-information-content/product-information-content.component";
import {OrdersGalleryContentComponent} from "./shopping/pages/orders-gallery-content/orders-gallery-content.component";
import {
  OrderInformationContentComponent
} from "./shopping/pages/order-Information-content/order-information-content.component";
import {RatesGalleryContentComponent} from "./shopping/pages/rates-gallery-content/rates-gallery-content.component";
import {SalesGalleryContentComponent} from "./shopping/pages/sales-gallery-content/sales-gallery-content.component";
import {SaleInformationContentComponent} from "./shopping/pages/sale-information-content/sale-information-content.component";
import {OrderRequestsContentComponent} from "./shopping/pages/order-requests-content/order-requests-content.component";

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent},
  { path: 'select-rol', component: SelectRolComponent},
  { path: 'merchant-home', component: MerchantMainContentComponent},
  { path: 'farmer-home', component: FarmerMainContentComponent },
  { path: 'sales', component: SalesGalleryContentComponent },
  { path: 'sales/:id', component: SaleInformationContentComponent },
  { path: 'requests', component: SalesStepperContentComponent },
  { path: 'crops', component: CropsStepperContentComponent},
  { path: 'costlist', component: CostsGalleryContentComponent },
  { path: 'profitlist', component: ProfitsGalleryContentComponent },
  { path: 'finance', component: TransactionsListContentComponent },
  { path: 'products', component: ProductsGalleryContentComponent },
  { path: 'products/:id', component: ProductInformationContentComponent },
  { path: 'orders', component: OrderRequestsContentComponent},
  { path: 'purchases', component: OrdersGalleryContentComponent },
  { path: 'purchases/:id', component: OrderInformationContentComponent },
  { path: 'rates', component: RatesGalleryContentComponent},
  { path: '**', redirectTo: 'signin', pathMatch: 'full'  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
