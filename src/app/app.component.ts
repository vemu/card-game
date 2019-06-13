import { Component, OnInit, Input } from '@angular/core';
import { Players } from './mock-players'
import { Player } from './player';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'card-game';
  // selectedPlayer: Player;
  // players = Players;
  @Input() player: Player;

  ngOnInit() {
    // this.selectedPlayer = player;
  }

  // showPlayerDetails(player) {
  //   this.selectedPlayer = player;
  // }

  // sortAsc() {
  //   this.players.sort((a, b) => a.realName.localeCompare(b.realName));
  // }

  // sortDesc() {
  //   this.players.sort((a, b) => b.realName.localeCompare(a.realName));
  // }

  submitPlayer() {
    console.log(this.player);
  }
}