import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movieID:any;
  movieType:any;
  movieDetails:any;
  constructor(public _moviesService:MoviesService,_activatedRoute:ActivatedRoute) {
   this.movieID = _activatedRoute.snapshot.paramMap.get("id");
   this.movieType = _activatedRoute.snapshot.paramMap.get("type");
   _moviesService.getMovieData(this.movieID,this.movieType).subscribe((data)=>{
     this.movieDetails=data;
   });
   }

  ngOnInit(): void {
  }

}
