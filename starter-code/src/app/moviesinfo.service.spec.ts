import { TestBed, inject } from '@angular/core/testing';

import { MoviesinfoService } from './moviesinfo.service';

describe('MoviesinfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoviesinfoService]
    });
  });

  it('should be created', inject([MoviesinfoService], (service: MoviesinfoService) => {
    expect(service).toBeTruthy();
  }));
});
