import { Component, OnInit } from '@angular/core';
import {DictionaryService} from "../../services/dictionary.service";
import {IWord} from "../iword";

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  listWord:IWord[]=[];
  constructor(private dictionary: DictionaryService) { }

  ngOnInit(): void {
    this.listWord = this.dictionary.getAll()
  }

}
