import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient) {}
  url = 'http://api.weatherstack.com/current';
  apiKey = '89fec8f87ef7f40e00a201632007c066';

  private ulrWeather;
  getData(loc) {
    this.ulrWeather = `${this.url}?access_key=${this.apiKey}&query=${loc}`;
    return this.http.get(this.ulrWeather);
  }
}
