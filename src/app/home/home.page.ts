import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  movies: any;

  constructor(private httpClient:HttpClient) {
    this.movies = this.httpClient.get('https://raw.githubusercontent.com/Denthor99/1.14_HLC_AppResponsive/master/peliculas.json');
  }

}
