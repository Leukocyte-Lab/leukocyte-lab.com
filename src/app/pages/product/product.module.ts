import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';

import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [CommonModule, ProductRoutingModule],
  declarations: [ProductComponent],
  providers: []
})
export class ProductModule {}
