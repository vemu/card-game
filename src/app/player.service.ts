import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Player } from './player';
import { Players } from './mock-players';

@Injectable({
  providedIn: 'root'
})

export class PlayerService {
  private playerSelection = new BehaviorSubject(null);
  selectedPlayer = this.playerSelection.asObservable();
  apiUrl = ""; // API Url of the Backend Endpoint (HTTP-POST)

  constructor(private http: HttpClient) { }

  getPlayers(): Player[] {
    return Players;
  }

  changePlayer(player: Player) {
    this.playerSelection.next(player)
  }

  sortAsc() {
    Players.sort((a, b) => a.realName.localeCompare(b.realName));
  }

  sortDesc() {
    Players.sort((a, b) => b.realName.localeCompare(a.realName));
  }

  postPlayerData(player: Player) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    let options = {
      headers: httpHeaders
    };

    this.http.post<Player>(this.apiUrl, player, options)
      .subscribe(
        data => {
          console.log("POST Request is successful ", data);
        },
        error => {
          console.log("Error", error);
        })
  }

}
