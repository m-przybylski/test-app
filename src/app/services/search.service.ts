import { Injectable, InjectionToken, Inject } from '@angular/core';
import { BASE_API } from '../tokens';
import { HttpClient } from '@angular/common/http';
import { SearchResult } from '../interfaces/search-result';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) {}
  readonly api = 'search?part=snippet&q=';
  searchResult(term: string) {
    return this.http.get<SearchResult>(`${this.api}${term}`);
  }
}
