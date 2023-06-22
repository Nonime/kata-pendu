import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HangmanTryComponent} from './hangman-try.component';

describe('HangmanTryComponent', () => {
  let component: HangmanTryComponent;
  let fixture: ComponentFixture<HangmanTryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HangmanTryComponent]
    });
    fixture = TestBed.createComponent(HangmanTryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
