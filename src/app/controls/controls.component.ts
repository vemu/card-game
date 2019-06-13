import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  playerSelectedFromOverview: Player;
  constructor(private playerService: PlayerService) { }
  
  ngOnInit() {
    this.playerService.selectedPlayer.subscribe(playerSelectedFromOverview => this.playerSelectedFromOverview = playerSelectedFromOverview)
  }

  submitPlayer() {
    alert(this.playerSelectedFromOverview);
  }
}
