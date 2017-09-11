import {NgModule} from '@angular/core';
import {ProductListComponent} from './products.component';
import {ProductDetailComponent} from './product-detail.component';
import {ConvertToSpacePipe} from './convertToSpace-pipe';
import {ProductGuardService} from './product-guard.service';
import {ProductService} from './products.service';
import {SharedModule} from '../shared/shared/shared.module';
import {ProductRoutingModule} from './product-routing/product-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacePipe
  ],
  providers: [
    ProductService,
    ProductGuardService
  ],
})
export class ProductModule { }
