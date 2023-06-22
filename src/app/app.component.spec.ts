import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {HangmanDisplayComponent} from './components/hangman-display/hangman-display.component';
import {HangmanTryComponent} from './components/hangman-try/hangman-try.component';
import {HangmanMaskComponent} from './components/hangman-mask/hangman-mask.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent, HangmanDisplayComponent, HangmanTryComponent, HangmanMaskComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  xit(`should have as title 'pendu-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pendu-app');
  });

  xit('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('pendu-app app is running!');
  });
});
