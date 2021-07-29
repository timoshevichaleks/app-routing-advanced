import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhraseDetailsComponent } from './phrase-details/phrase-details.component';
import { PhraseHomeComponent } from './phrase-home/phrase-home.component';
import { PhrasesListComponent } from './phrases-list/phrases-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/phrases', pathMatch: 'full'},
  {
    path: 'phrases',
   component: PhraseHomeComponent,
   children: [
     {
       path: '',
       component: PhrasesListComponent,
       children: [
         {path: ':id', component: PhraseDetailsComponent}
       ]
      }
   ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhrasesRoutingModule { }
