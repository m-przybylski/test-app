import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { VideoService } from '../../services/video.service';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'byt-player',
  templateUrl: './player.component.html',
  animations: [
    trigger('hide', [
      state('colapse', style({ height: '20px' })),
      state('expand', style({ height: '*' })),
      transition('* => *', animate(200))
    ])
  ]
})
export class PlayerComponent {
  public state = 'colapse';
  public videoDetail$;
  private videoSource = '';
  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private video: VideoService
  ) {
    const videoId = route.snapshot.paramMap.get('videoId');
    this.videoSource = `https://www.youtube.com/embed/${videoId}`;
    this.videoDetail$ = this.video.getVideoDetails(videoId);
  }

  public get videoUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.videoSource);
  }

  public toggleState() {
    if (this.state === 'colapse') {
      this.state = 'expand';
    } else {
      this.state = 'colapse';
    }
  }
}
