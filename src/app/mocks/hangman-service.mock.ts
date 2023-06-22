import {signal} from '@angular/core';
// TODO configuration pour exclure les fichiers .mock.ts du coverage
export const hangmanServiceMock = {
  triedLetters: signal<string[]>(['B', 'T']),
  failedTries: signal(1),
  wordToFind: 'TOTO',
  wordMasked: signal('T_T_'),
  isPlaying: signal(false),
  tryLetter: () => {
  },
  newGame: () => {
  }
};
