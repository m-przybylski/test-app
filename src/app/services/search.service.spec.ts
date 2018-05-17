import { SearchService } from './search.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('SerachService', () => {
  let service: SearchService;
  let backend: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [SearchService]
    });
    service = TestBed.get(SearchService);
    backend = TestBed.get(HttpTestingController);
  });
  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
