import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trendingMovie:any;
  trendingTV:any;
  constructor(public _movieServices:MoviesService) {
    _movieServices.getTrending("movie").subscribe((data)=>{
      //data.results.sort((a:any, b:any) => (a.vote_average > b.vote_average) ? 1 : -1); //تصاعدي
        // data.results.sort((a:any,b:any)=>{ return a.vote_average-b.vote_average});
      this.trendingMovie=data.results;
    });
    _movieServices.getTrending("tv").subscribe((data)=>{
      this.trendingTV=data.results;
    });
   }

  ngOnInit(): void {
  }

  
}
