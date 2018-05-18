import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { VideoResult } from '../interfaces/video-result';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  readonly api = 'videos?part=snippet';
  constructor(private http: HttpClient) {}

  getVideoDetails(videoId: string): Observable<VideoResult> {
    return this.http.get(this.api, { params: { id: videoId } }).pipe(
      pluck('items'),
      map(result => result[0]),
      map(result => ({
        id: result.id,
        title: result.snippet.title,
        description: result.snippet.description,
        tags: result.snippet.tags
      }))
    );
  }
}
