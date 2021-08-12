import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroesItemComponent } from './components/heroes-item/heroes-item.component';

const appRoutes: Routes = [
  // {path: '', component: HeaderComponent},
  {path: '', component: HeroesComponent}
  // {path: '', component: FooterComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroesComponent,
    FooterComponent,
    HeroesItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
