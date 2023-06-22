import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HangmanMaskComponent} from './hangman-mask.component';
import {By} from '@angular/platform-browser';
import {HangmanService} from '../../services/hangman.service';
import {hangmanServiceMock} from '../../mocks/hangman-service.mock';

describe('HangmanMaskComponent', () => {
  let component: HangmanMaskComponent;
  let fixture: ComponentFixture<HangmanMaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HangmanMaskComponent],
      providers: [{provide: HangmanService, useValue: hangmanServiceMock}]
    });
    fixture = TestBed.createComponent(HangmanMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('affiche la valeur du mask', () => {
    const spanMask = fixture.debugElement.query(By.css('#maskSpan')).nativeElement as HTMLSpanElement;
    const innerText = spanMask.innerText;
    expect(innerText).toEqual('T _ T _');
  });
});
