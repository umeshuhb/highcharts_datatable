import { TestBed } from '@angular/core/testing';

import { LanguageUserService } from './language-user.service';

describe('LanguageUserService', () => {
  let service: LanguageUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
