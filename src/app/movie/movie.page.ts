import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Services/service.service'; // services
//import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {

// variables
MovieData:any=[];
searchTitle:string = "";
film:any;

  // imported classes
  constructor(private serviceService:ServiceService) {
  
   }

   // Pulls current film info and allocates to movie variable
   filmInfo(movie) {
      this.serviceService.currentFilm = movie;
   } // END filmInfo

   performSearch() {
    //console.log(this.searchTitle); //Test searchTitle in console
    this.serviceService.GetSearchData(this.searchTitle).subscribe(
      (data)=>{
        this.MovieData = data.Search;
      }
    );
   } // END performSearch

  // callback method that is invoked immediately
  ngOnInit() {
    this.serviceService.GetMovieData().subscribe(
      (data)=>{ // gets and stores movie api data
        this.MovieData = data.Search;
        this.film = data;
      }
    );
  } // END ngOnInit

} // END MoviePage
