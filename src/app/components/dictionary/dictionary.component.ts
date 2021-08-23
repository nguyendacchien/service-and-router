import {Component, OnDestroy, OnInit} from '@angular/core';
import {DictionaryService} from "../../services/dictionary.service";
import {IWord} from "../iword";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit, OnDestroy {
  // @ts-ignore
  word: IWord;
  constructor(private dictionary:DictionaryService,private activatedRoute:ActivatedRoute) { }
  // @ts-ignore
  sub: Subscription;
  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap:ParamMap)=>{
      const key:any= paramMap.get('key');
      const meaning = this.dictionary.search(key);
      this.word = {key: key, meaning: meaning};
    });
  }
  ngOnDestroy():void{
    this.sub.unsubscribe();
  }
}
