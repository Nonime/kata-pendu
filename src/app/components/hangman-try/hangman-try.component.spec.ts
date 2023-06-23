import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HangmanTryComponent} from './hangman-try.component';
import {HangmanService} from '../../services/hangman.service';
import {By} from '@angular/platform-browser';
import {hangmanServiceMock} from '../../mocks/hangman-service.mock';

describe('HangmanTryComponent', () => {
  let component: HangmanTryComponent;
  let fixture: ComponentFixture<HangmanTryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HangmanTryComponent],
      providers: [{provide: HangmanService, useValue: hangmanServiceMock}]
    });
    fixture = TestBed.createComponent(HangmanTryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('appel le hangman service sur le click ', () => {
    spyOn(component, 'onNewGameClick');
    const newGameButton = fixture.debugElement.query(By.css('.new-game'))?.nativeElement as HTMLButtonElement;
    newGameButton.click();
    expect(component.onNewGameClick).toHaveBeenCalled();
  });
  it('click sur un bouton de lettre', () => {
    spyOn(component, 'onLetterClick');
    const boutonLettre = fixture.debugElement.query(By.css('.letter'))?.nativeElement as HTMLButtonElement;
    boutonLettre.click();
    expect(component.onLetterClick).toHaveBeenCalled();
  });

  it('appel le hangman service sur le click ', () => {
    const spy = spyOn(hangmanServiceMock, 'newGame');
    component.onNewGameClick();
    expect(spy).toHaveBeenCalled();
  });

  it(`appel le hangman service sur a l'appel de la fonction onLetterClick`, () => {
    const spyFonctionDuService = spyOn(hangmanServiceMock, 'tryLetter');
    const mockEvent: Event = <Event><{target: {textContent: string}}>{
      target: {
        textContent: 'T'
      }
    };
    component.onLetterClick(mockEvent);
    expect(spyFonctionDuService).toHaveBeenCalled();
  });

  it(`decoupe le tableau en enssemble de lettre`, () => {
    const spyFonctionDuService = spyOn(hangmanServiceMock, 'tryLetter');
    const mockEvent: Event = <Event><{target: {textContent: string}}>{
      target: {
        textContent: 'T'
      }
    };
    component.onLetterClick(mockEvent);
    expect(spyFonctionDuService).toHaveBeenCalled();
  });

  it('affiche 26 boutons pour toutes mes lettres', () => {
    const boutonsDebugElements = fixture.debugElement.queryAll(By.css('.letter'));
    expect(boutonsDebugElements).not.toBeNull();
    expect(boutonsDebugElements.length).toEqual(26);
  });
  it('affiche un bouton pour chaque lettre', () => {
    const decalageIndex = 1;
    let tableauExtrait = component.gameLetters;
    const boutonsDebugElements = fixture.debugElement.queryAll(By.css('.letter'));

    boutonsDebugElements.forEach(value => {
      const nativeElement = value.nativeElement as HTMLButtonElement;
      const index = tableauExtrait.indexOf(nativeElement.textContent ? nativeElement.textContent : '');
      tableauExtrait = tableauExtrait.splice(index + decalageIndex, 1);
    });
    expect(tableauExtrait).withContext('Une valeur n\'est pas afficher dans le html').toEqual([]);
  });

});
