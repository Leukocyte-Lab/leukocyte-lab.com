import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ThemeModule } from 'src/app/@theme/theme.module';

import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [CommonModule, ThemeModule, ProductRoutingModule],
  declarations: [ProductComponent],
  providers: []
})
export class ProductModule {}
