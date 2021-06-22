import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CcPaginatorComponent } from './cc-paginator/cc-paginator.component';
import { PaginatorService } from './cc-paginator/service/paginator.service';

@NgModule({
  declarations: [	
    AppComponent,
    CcPaginatorComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PaginatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
