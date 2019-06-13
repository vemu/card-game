import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Player } from './player';
import { Players } from './mock-players';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private playerSelection = new BehaviorSubject(null);
  selectedPlayer = this.playerSelection.asObservable();

  getPlayers(): Player[] {
    return Players;
  }

  changePlayer(player: Player) {
    this.playerSelection.next(player)
  }

}
