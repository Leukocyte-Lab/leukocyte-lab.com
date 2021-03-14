import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';

import { NewsComponent } from './news/news.component';

@NgModule({
  imports: [CommonModule, NewsRoutingModule],
  declarations: [NewsComponent],
  providers: []
})
export class NewsModule {}
