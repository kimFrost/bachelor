import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

import { Player } from "../models/bachelor";

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  public players: Player[] = [];
  public bInEditMode: boolean = true;

  constructor(
    public dataService: DataService
  ) {

  }

  ngOnInit() {
    this.dataService.getPlayers().subscribe(
      (players: Player[]) => {
        this.players = players;
      }
    );
  }

  public createPlayer() {

  }

}


//https://medium.com/@jinalshah999/cloud-fire-store-crud-operation-using-angular-f319bef27ce0