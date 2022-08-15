import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './component/news/news.component';
import { CreateComponent } from './component/create/create.component';
import { DetailComponent } from './component/detail/detail.component';
import {NewsService} from './service/news.service';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [NewsComponent, CreateComponent, DetailComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [NewsService]
})
export class NewsModule { }
