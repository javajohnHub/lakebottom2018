import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { IframesComponent } from './iframes/iframes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FacebookComponent } from './facebook/facebook.component';
import { WhyComponent } from './why/why.component';
import { ContactComponent } from './contact/contact.component';
import {DropdownModule} from 'primeng/dropdown';
import { MyPanelMenu, MyPanelMenuSub } from './navbar/my-p-panelMenu';
import { AlbumsComponent } from './albums/albums.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavbarComponent,
    IframesComponent,
    AlbumsComponent,
    FooterComponent,
    FacebookComponent,
    WhyComponent,
    ContactComponent,
    MyPanelMenu,
    MyPanelMenuSub
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
