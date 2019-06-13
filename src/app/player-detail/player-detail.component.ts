import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  player: Player;
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.selectedPlayer.subscribe(player => this.player = player)
  }

}
