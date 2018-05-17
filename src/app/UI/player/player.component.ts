import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'byt-player',
  templateUrl: './player.component.html',
  styles: []
})
export class PlayerComponent {
  private videoSource = '';
  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.videoSource = `https://www.youtube.com/embed/${route.snapshot.paramMap.get(
      'videoId'
    )}`;
  }

  public get videoUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.videoSource);
  }
}
