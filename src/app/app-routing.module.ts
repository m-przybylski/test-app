import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './UI/search/search.component';
import { PlayerComponent } from './UI/player/player.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: ':videoId', component: PlayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
