import { Component, OnInit,Input } from '@angular/core';
import { weatherBit } from '../../environments/environment';
import { WeatherForecast } from '../models/weather-forecast';
import {CityDetails} from '../models/city-details';
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
  }

  getWeather() {
    console.log(weatherBit.apiKey);
    this.weatherBitUrl = `${weatherBit.urlBase}?city=${this.searchText}&key=${weatherBit.apiKey}`;
    //this.weatherBitUrl = `https://api.weatherbit.io/v2.0/forecast/daily?city=Raleigh,NC&key=${weatherBit.apiKey}`;
    this.http.get(this.weatherBitUrl).subscribe((results: any) => {
      console.log("WEATHER RESULT...");
      console.log(results);
      console.log("WEATHER RESULT...");
      this.cityDetails = new CityDetails(results['city_name'], results['state_code']);
      this.weatherForecasts = results['data'].map(forecast => new WeatherForecast(forecast));
    });
  }

  ngOnInit() {
  }

}
