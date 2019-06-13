import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayersOverviewComponent } from './players-overview/players-overview.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { ControlsComponent } from './controls/controls.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersOverviewComponent,
    PlayerDetailComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
