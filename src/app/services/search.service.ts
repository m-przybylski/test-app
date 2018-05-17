import { Injectable, InjectionToken, Inject } from '@angular/core';
import { BASE_API } from '../tokens';
import { HttpClient } from '@angular/common/http';
import { SearchResult, SearchResultItem } from '../interfaces/search-result';
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) {}
  readonly api = 'search?part=snippet&q=';
  searchResult(term: string): Observable<SearchResultItem[]> {
    return this.http
      .get<SearchResult>(`${this.api}${term}`)
      .pipe(pluck('items'));
  }
}
