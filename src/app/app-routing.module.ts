import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DictionaryComponent} from "./components/dictionary/dictionary.component";
import {DictionaryPageComponent} from "./components/dictionary-page/dictionary-page.component";
import {TimelinesComponent} from "./components/timelines/timelines.component";

const routes: Routes = [
  {
    path:'dictionary',
    component:DictionaryPageComponent,
    children:[
      {
        path:':key',
        component:DictionaryComponent
      }
    ]
  },
  {
    path:'timeline',
    component:TimelinesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
