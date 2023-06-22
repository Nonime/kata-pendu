import {TestBed} from '@angular/core/testing';

import {HangmanService} from './hangman.service';
import {RandomWordGeneratorService} from './random-word-generator.service';

describe('HangmanService', () => {
  const mockWord = 'toto';
  let service: HangmanService;
  const mockRandomWord: RandomWordGeneratorService = {
    words: [],
    getRandomWord(): string {
      return mockWord;
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: RandomWordGeneratorService, useValue: mockRandomWord}
      ]
    });
    service = TestBed.inject(HangmanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('essaye une lettre ', () => {
    beforeEach(() => {
      service.newGame();
    });

    it(`qui n'est pas dans le mot ajoute un au comteur de ko`, () => {
      expect(service.failedTries()).toEqual(0);
      service.tryLetter('A');
      expect(service.failedTries()).toEqual(1);
    });
    it(`qui est dans le mot n'ajoute pas un au comteur de ko`, () => {
      expect(service.failedTries()).toEqual(0);
      service.tryLetter('T');
      expect(service.failedTries()).toEqual(0);
    });
    it(`qui fonctionne impact le mask`, () => {
      service.tryLetter('T');
      let wordMasked = service.wordMasked();
      expect(wordMasked).toEqual('T_T_');
    });

    it(`et trouve le mot complet fini la partie`, () => {
      expect(service.isPlaying()).toEqual(true);
      service.tryLetter('T');
      service.tryLetter('O');
      expect(service.isPlaying()).toEqual(false);
    });

    it(`qui fonctionne impact le mask et gagne si le mask est complete`, () => {
      service.tryLetter('T');
      let wordMaskedTT = service.wordMasked();
      expect(wordMaskedTT).toEqual('T_T_');
      service.tryLetter('O');
      let wordMaskedTOTO = service.wordMasked();
      expect(wordMaskedTOTO).toEqual('TOTO');
    });

  });
  describe('intancié une nouvelle partie ', () => {

    it('reset les lettres tenté', () => {
      service.triedLetters.set(['A', 'E', 'I', 'O']);
      service.newGame();
      expect(service.triedLetters()).toEqual([]);
    });
    it('reset le compteur de tentative ko', () => {
      service.failedTries.set(99);
      service.newGame();
      expect(service.failedTries()).toEqual(0);
    });
    it('Relance la partie', () => {
      service.isPlaying.set(false);
      service.newGame();
      expect(service.isPlaying()).toEqual(true);
    });
    it('crée un mask pour le mot définie par le service', () => {
      service.newGame();
      expect(service.wordMasked()).toEqual('_'.repeat(mockWord.length));
    });
  });
});
