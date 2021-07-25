import { Injectable } from '@angular/core';
import { PHRASES } from './mock-data';
import { Phrase } from './phrase.class';

const phrasesPromise = Promise.resolve(PHRASES);

// const phrasesPromise: Promise<Phrase[]> = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(PHRASES);
//   }, 2000)
// });

@Injectable({
  providedIn: 'root'
})
export class PhraseService {

  constructor() { }

  getAllPhrases(): Promise<Phrase[]> {
    return phrasesPromise;
  }

  getPhrase(id: number): Promise<Phrase | any> {
    return phrasesPromise.then(phrases => phrases.find(phrase => phrase.id === id));
  }
}
