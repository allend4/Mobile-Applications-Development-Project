import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage'; // storage
import { Geolocation } from '@ionic-native/geolocation/ngx'; // geolocation
import { ServiceService } from '../Services/service.service'; // services

@Component({
  selector: 'app-extra',
  templateUrl: './extra.page.html',
  styleUrls: ['./extra.page.scss'],
})

export class ExtraPage implements OnInit {

  // variables
  location:string;
  long:number;
  lat:number;
  weatherData:any = [];

  //  injects the imported classes
  constructor(private serviceService:ServiceService, private storage:Storage, private geolocation:Geolocation) {
  
    }

  myLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude; // maps latitide
      this.long = resp.coords.longitude; // maps longitude
    }).catch((error) => {
      console.log('Error getting location', error);
      });
    console.log(this.lat,this.long); // test data in console
  } // END myLocation

  ngOnInit() { // pull api data for weather
    this.serviceService.GetWeatherData().subscribe(
      (wdata)=>{
         this.weatherData = wdata.weather;
         console.log(this.weatherData);
      }
    );
    console.log(this.weatherData); // test data in console
  } // END ngOnInit

 } // END ExtraPage
