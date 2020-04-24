import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage'; // storage

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
})
export class FavouritePage implements OnInit {

  // variables
  movie:string;
  film:string;

  constructor(private storage:Storage) { 

  }

  save() {
    console.log(this.movie); // test data on console
    this.storage.set("movie", this.movie); // save info to storage
    
  } // END save

  ngOnInit() {
    this.storage.get("movie").then(
      (data)=>{
        this.film = data;
      }
    ).catch(
      (error)=>{
        console.log(error);
      }
    )
  } // END ngOnInit

} // END FavouritePage
