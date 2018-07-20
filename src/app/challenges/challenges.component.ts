import { Component, OnInit } from '@angular/core';

import { Challenge } from "../models/bachelor";
import { DataService } from '../data.service';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent implements OnInit {

  public challenges: Challenge[] = [];

  constructor(
    public dataService: DataService
  ) {

  }

  ngOnInit() {
    this.dataService.getChallenges().subscribe(
      (challenges: Challenge[]) => {
        this.challenges = challenges;
      }
    );
  }

}
