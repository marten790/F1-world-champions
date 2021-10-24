// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChampionsComponent } from './pages/champions/champions.component';
import { BannerComponent } from './shared/banner/banner.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { WinnersYearComponent } from './pages/winners-year/winners-year.component';

@NgModule({
  declarations: [
    AppComponent,
    ChampionsComponent,
    BannerComponent,
    LoaderComponent,
    WinnersYearComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
