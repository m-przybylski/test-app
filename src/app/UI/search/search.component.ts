import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Renderer2,
  OnDestroy,
  Inject,
  NgZone
} from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Observable } from 'rxjs';
import { SearchResultItem } from '../../interfaces/search-result';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'byt-search',
  templateUrl: './search.component.html',
  providers: [SearchService]
})
export class SearchComponent implements AfterViewInit, OnDestroy {
  public searchTerm: string;
  public searchResult: Observable<SearchResultItem[]>;
  public videos: SearchResultItem[];
  private scrollListener;
  constructor(
    private searchSvc: SearchService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: HTMLDocument,
    private zone: NgZone
  ) {}
  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      this.scrollListener = this.renderer.listen('document', 'scroll', () => {
        const element: HTMLElement = this.document
          .documentElement as HTMLElement;
        if (element.scrollHeight === element.scrollTop + element.offsetHeight) {
          this.zone.run(() => {
            this.searchSvc
              .fetchNextPage()
              .subscribe(videos => (this.videos = this.videos.concat(videos)));
          });
        }
      });
    });
  }
  ngOnDestroy() {
    this.scrollListener();
    this.scrollListener = null;
  }
  public search(term: string) {
    this.searchSvc
      .searchResult(term)
      .subscribe(videos => (this.videos = videos));
  }
}
