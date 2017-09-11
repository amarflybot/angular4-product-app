import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListComponent} from './products.component';
import {ProductDetailComponent} from './product-detail.component';
import {ConvertToSpacePipe} from './convertToSpace-pipe';
import {StarComponent} from './star/star.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ProductGuardService} from './product-guard.service';
import {ProductService} from './products.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
    {path: 'products', component: ProductListComponent},
    {path: 'products/:id', component: ProductDetailComponent, canActivate: [ProductGuardService]}
    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacePipe,
    StarComponent
  ],
  providers: [
    ProductService,
    ProductGuardService
  ],
})
export class ProductModule { }
