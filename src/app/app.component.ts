import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'card-game';
  selectedPlayer: Object;
  playerNameArray: any;
  players = [
    { realName: 'Brianna Forbes', playerName: 'Dr Dreamlurk The Unstoppable', asset: 'Foghammer Lead' },
    { realName: 'Darcy Candice Ball', playerName: 'Crystaldash', asset: 'Secret Glowquake Gold' },
    { realName: 'Hillary Gibbs', playerName: 'Speedsoul', asset: 'Shifting Rainshadow Iron' },
    { realName: 'Elva Becky Hammond', playerName: 'Seekvenom The Mystic', asset: "Valkyries' Opal Adamant" },
    { realName: 'Enid Rose', playerName: 'Coincurse The Ghoul', asset: 'Jewelevil Bronze Of Goddesses' },
    { realName: 'Esmeralda Carrillo', playerName: 'Skulldart', asset: 'Yellow Orichalcum Of Paladins' }
  ];
  public player: any;
  ngOnInit() {
    this.selectedPlayer = null;
    this.playerNameArray = [];
  }
  showPlayerDetails(player) {
    this.selectedPlayer = player;
    // alert(player.realName);
  }
  sortAsc() {
    this.players.sort((a, b) => a.realName.localeCompare(b.realName));
  }
  sortDesc() {
    this.players.sort((a, b) => b.realName.localeCompare(a.realName));
  }
}