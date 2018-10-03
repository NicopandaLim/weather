export class WeatherForecast {
    datetime: string;
    max_temp: number;
    min_temp: number;
    constructor(data: Object) {
        this.datetime = data['datetime'];
        this.max_temp = data['max_temp'];
        this.min_temp = data['min_temp'];
    }
}
