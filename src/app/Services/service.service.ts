import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //  communicating with HTTP servers
import { Observable } from 'rxjs'; // eactive programming using observables

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // variable
  currentFilm:any; // for single film

  constructor(private httpClient:HttpClient) { 
    
  }

  GetMovieData():Observable<any>{ // http gets api data  
    return this.httpClient.get('http://www.omdbapi.com/?apikey=6462cf83&s=%27war%27%27');
  } // GetMovieData

  GetSearchData(title:string):Observable<any>{ // http gets api data 
    return this.httpClient.get('http://www.omdbapi.com/?apikey=6462cf83&s='+title);
  } // END GetSearchData

  /* // Aimed to use movie id, as pulls more data/options from json
  GetFilmData(id:string):Observable<any>{ // http gets api data 
    return this.httpClient.get('http://www.omdbapi.com/?apikey=6462cf83&i='+id);
  } // END GetFilmData
 */

  GetNewsData():Observable<any>{ // http gets api data 
    return this.httpClient.get('https://newsapi.org/v2/everything?q=movies&apiKey=0979f024b01b407fb054413980d187ee');
  } // END GetNewsData

  GetWeatherData():Observable<any>{ // http gets api data 
    //return this.httpClient.get('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + long + '&appid=cb2d170ac04ef1d87ddedadaeb18bea7');
    return this.httpClient.get('http://api.openweathermap.org/data/2.5/weather?q=Galway&appid=cb2d170ac04ef1d87ddedadaeb18bea7');
  } // END GetWeatherData

} // END ServiceService
