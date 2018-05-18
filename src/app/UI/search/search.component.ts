import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Observable } from 'rxjs';
import { SearchResultItem } from '../../interfaces/search-result';

@Component({
  selector: 'byt-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  public searchTerm: string;
  public searchResult: Observable<SearchResultItem[]>;
  constructor(private searchSvc: SearchService) {}
  public search(term: string) {
    this.searchResult = this.searchSvc.searchResult(term);
  }
}
