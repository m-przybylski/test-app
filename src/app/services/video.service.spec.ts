import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { VideoService } from './video.service';

const mock = {
  kind: 'youtube#videoListResponse',
  etag: '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/IDz1Z-45OBQ-g3f0GVdumuruCMw"',
  pageInfo: { totalResults: 1, resultsPerPage: 1 },
  items: [
    {
      kind: 'youtube#video',
      etag: '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/wXyCAHJ-ldC6dnwhKlE7KTfFYtI"',
      id: 'd00_feh_EE4',
      snippet: {
        publishedAt: '2016-09-05T18:17:03.000Z',
        channelId: 'UCEqP9HTu7AxEaIB1OskaZQg',
        title: 'Borys LBD featuring Bado - Jessica',
        description: 'some description vary long and so on... and more',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/d00_feh_EE4/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/d00_feh_EE4/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/d00_feh_EE4/hqdefault.jpg',
            width: 480,
            height: 360
          },
          standard: {
            url: 'https://i.ytimg.com/vi/d00_feh_EE4/sddefault.jpg',
            width: 640,
            height: 480
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/d00_feh_EE4/maxresdefault.jpg',
            width: 1280,
            height: 720
          }
        },
        channelTitle: 'Borys LBD',
        tags: [
          'borys',
          'lbd',
          'jessica',
          'bado',
          'disco',
          'polo',
          'top',
          'best'
        ],
        categoryId: '10',
        liveBroadcastContent: 'none',
        localized: {
          title: 'Borys LBD featuring Bado - Jessica',
          description: 'some description vary long and so on... and more'
        },
        defaultAudioLanguage: 'pl'
      }
    }
  ]
};
const result = {
  id: 'd00_feh_EE4',
  title: 'Borys LBD featuring Bado - Jessica',
  description: 'some description vary long and so on... and more',
  tags: ['borys', 'lbd', 'jessica', 'bado', 'disco', 'polo', 'top', 'best']
};

describe('VideoService', () => {
  let service: VideoService;
  let backend: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [VideoService]
    });

    service = TestBed.get(VideoService);
    backend = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should extract needed data', async(() => {
    service.getVideoDetails('SOMEID').subscribe(videoData => {
      expect(videoData).toEqual(result);
    });
    const req = backend.expectOne('videos?part=snippet&id=SOMEID');
    req.flush(mock);
  }));
});
