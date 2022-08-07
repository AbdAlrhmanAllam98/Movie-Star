import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  {path:"",redirectTo:"register",pathMatch:"full"},
  {path:"home", canActivate:[AuthGuard], component:HomeComponent},
  {path:"movies", canActivate:[AuthGuard],component:MoviesComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"movieDetails/:id/:type", canActivate:[AuthGuard], component:MovieDetailsComponent},
  {path:"404",component:NotFoundComponent},
  {path:"**",redirectTo:"404",pathMatch:"full"},
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
