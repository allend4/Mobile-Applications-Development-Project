import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Services/service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})

export class MovieDetailsPage implements OnInit {

  // variable
  film;
 
  // imported class
  constructor(private serviceService:ServiceService) { 

  }

   ngOnInit() {
    this.film = this.serviceService.currentFilm; // film data pulled from current film api data
    console.log(this.serviceService.currentFilm); // test data in console
  } // END ngOnInit

} // END MovieDetailsPage
