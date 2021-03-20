import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ThemeModule } from 'src/app/@theme/theme.module';

import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [CommonModule, ThemeModule, HomeRoutingModule],
  declarations: [HomeComponent],
  providers: []
})
export class HomeModule {}
