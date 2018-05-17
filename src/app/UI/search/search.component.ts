import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'byt-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  public searchTerm: string;
  public searchResult;
  constructor(private searchSvc: SearchService) {}
  public search(term) {
    this.searchResult = this.searchSvc.searchResult(term);
  }
}
