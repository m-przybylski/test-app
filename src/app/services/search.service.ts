import { Injectable, InjectionToken, Inject } from '@angular/core';
import { BASE_API } from '../tokens';
import { HttpClient } from '@angular/common/http';
import { SearchResult, SearchResultItem } from '../interfaces/search-result';
import { pluck, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) {}
  readonly api = 'search?part=snippet&maxResults=25';
  private nextPageToken: string;

  searchResult(term: string): Observable<SearchResultItem[]> {
    return this.http
      .get<SearchResult>(`${this.api}`, { params: { q: term } })
      .pipe(
        tap(result => {
          this.nextPageToken = result.nextPageToken;
        }),
        pluck('items')
      );
  }

  fetchNextPage(): Observable<SearchResultItem[]> {
    return this.http
      .get<SearchResult>(`${this.api}`, {
        params: { pageToken: this.nextPageToken }
      })
      .pipe(
        tap(result => {
          this.nextPageToken = result.nextPageToken;
        }),
        pluck('items')
      );
  }
}
