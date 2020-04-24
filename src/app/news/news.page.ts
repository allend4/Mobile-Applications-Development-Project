import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Services/service.service'; // services
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx'; // in app browser

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})

export class NewsPage implements OnInit {

  // variable
  NewsData:any=[];

  constructor(private serviceService:ServiceService, private iab:InAppBrowser,) { 

  }

  loadNews(url:string) { // pulls url infor from news api
    this.iab.create(url, "_Self"); // opens url in InAppBrowser
    //console.log(this.iab); // test data in console
  } // END loadNews

  ngOnInit() {
    this.serviceService.GetNewsData().subscribe(
      (ndata)=>{
      //console.log(ndata); // Test data available in console
      this.NewsData = ndata.articles;
      } 
    );
  } // END ngOnInit

} // END NewsPage
