import {Injectable} from '@angular/core';
import {IWord} from "../components/iword";
@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private words: IWord[] = [
    {
      key: 'dog',
      meaning: 'con chó'
    },
    {
      key: 'cat',
      meaning: 'con mèo'
    },
    {
      key: 'pig',
      meaning: 'con lợn'
    }
  ];

  constructor() {
  }
  getAll():IWord[]{
    return this.words
  }

  search(word: string): string {
    if (!word) {
      return '';
    }
    const value = this.words.find(item => item.key === word.toLowerCase());
    if (value) {
      return value.meaning;
    }
    return 'Not found';
  }
}
