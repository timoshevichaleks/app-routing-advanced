import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Phrase } from '../shared/phrase.class';
import { PhraseService } from '../shared/phrase.service';

@Component({
  selector: 'app-phrase-details',
  templateUrl: './phrase-details.component.html',
  styleUrls: ['./phrase-details.component.scss']
})
export class PhraseDetailsComponent implements OnInit {

  phrase!: Phrase;

  constructor(
    private phraseService: PhraseService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params.forEach((params: Params) => {
      const id: number = +params.id;

      if (isNaN(id)) return;

      this.phraseService
          .getPhrase(id)
          .then(result => this.phrase = result);
    });
  }

  gotoPhrasesList() {
    this.router.navigate(['/phrases']).then();
  }

}
