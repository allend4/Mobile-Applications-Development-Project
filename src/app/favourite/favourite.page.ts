import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage'; // storage

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
})
export class FavouritePage implements OnInit {

  // variables
  info:any[];
  data:string;

  constructor(private storage:Storage) { 

  }

  save() {
    console.log(this.info); // test data on console
    this.storage.set("info", this.data); // save info to storage
  } // END save

  ngOnInit() {
    this.storage.get("data").then(
      (data)=>{
        this.data = data;
      }
    ).catch(
      (error)=>{
        console.log(error);
      }
    )
  } // END ngOnInit

} // END FavouritePage
