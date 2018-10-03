import { Component, OnInit,Input } from '@angular/core';
import { weatherBit } from '../../environments/environment';
import { WeatherForecast, CityDetails } from '../weather-forecast/weather-forecast.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather-forecast-list',
  templateUrl: './weather-forecast-list.component.html',
  styleUrls: ['./weather-forecast-list.component.css']
})
export class WeatherForecastListComponent implements OnInit {
  weatherBitUrl: string;
  weatherForecasts: WeatherForecast[];
  @Input() searchText: string;
  cityDetails: CityDetails;
  
  constructor(private http: HttpClient) {
    this.weatherForecasts = [];
    this.weatherBitUrl = ``;
    console.log('works');
  }

  getWeather() {
    //this.weatherBitUrl = `${weatherBit.urlBase}?city=${this.searchText}&key=${weatherBit.apiKey}`;
    //subscribe to weatherbit forecase results here
  }

  ngOnInit() {
  }

}
