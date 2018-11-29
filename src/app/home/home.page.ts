import { Component, OnInit } from '@angular/core';
import AppService from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private _appService: AppService) { }

  ngOnInit() {
    console.log('test', this._appService)
    this.getCards();
  }

  getCards() {
    this._appService.getCards().subscribe(
      data => {
        console.log('data', data)
      },
      err => console.error(err)
    )
  }
} 
