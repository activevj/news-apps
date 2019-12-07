import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { NewsApiService } from './news-api.service';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule,
   FormsModule,
   BrowserAnimationsModule,
   HttpClientModule,
   MatButtonModule,
   MatMenuModule,
   MatCardModule,
   MatToolbarModule,
   MatIconModule,
   MatSidenavModule,
   MatListModule,
   ],
  providers: [NewsApiService],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
