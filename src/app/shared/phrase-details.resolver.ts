import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Phrase } from './phrase.class';
import { PhraseService } from './phrase.service';

@Injectable({
  providedIn: 'root'
})
export class PhraseDetailsResolver implements Resolve<Phrase | boolean> {

  constructor(
    private phraseService: PhraseService,
    private router: Router
    ) { }

    private emptyNavigate(): void {
      this.router.navigate(['phrases']).then()
    }

  resolve(route: ActivatedRouteSnapshot): Observable<Phrase | boolean> | Promise<Phrase | boolean> {
    const id = +route.params.id;

    if (isNaN(id)) this.emptyNavigate();

    return this.phraseService.getPhrase(id).then(phrase => {
      if (phrase) {
        return phrase;
      }
      this.emptyNavigate();
      return false;
    })
  }
}
