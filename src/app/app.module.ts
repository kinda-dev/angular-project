import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroesItemComponent } from './components/heroes-item/heroes-item.component';
import { AboutComponent } from './pages/about/about.component';
import { appReducers } from './store/store.module';
import { HeroEffetcs } from './store/effects/hero.effects';
const appRoutes: Routes = [
  {path: '', component: HeroesComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', redirectTo: ''}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroesComponent,
    FooterComponent,
    HeroesItemComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([HeroEffetcs]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
