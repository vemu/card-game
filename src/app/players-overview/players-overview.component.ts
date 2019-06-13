import { Component, OnInit } from '@angular/core';
import { Players } from '../mock-players'
import { Player } from '../player';
import { PlayerService } from '../player.service'
@Component({
  selector: 'app-players-overview',
  templateUrl: './players-overview.component.html',
  styleUrls: ['./players-overview.component.css']
})
export class PlayersOverviewComponent implements OnInit {

  players: Player[];
  selectedPlayer: Player;
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.selectedPlayer = null;
    this.getPlayers();
  }

  getPlayers() {
    this.players = this.playerService.getPlayers();
  }

  showPlayerDetails(player) {
    this.playerService.changePlayer(player)
    // for selected player - class toggle
    this.selectedPlayer = player;
  }
}