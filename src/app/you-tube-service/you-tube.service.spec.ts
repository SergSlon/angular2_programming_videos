/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { YouTubeService } from './you-tube.service';

describe('Service: YouTubeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YouTubeService]
    });
  });

  it('should ...', inject([YouTubeService], (service: YouTubeService) => {
    expect(service).toBeTruthy();
  }));
});
