import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Phrase } from '../shared/phrase.class';
import { PhraseService } from '../shared/phrase.service';

@Component({
  selector: 'app-phrases-list',
  templateUrl: './phrases-list.component.html',
  styleUrls: ['./phrases-list.component.scss']
})
export class PhrasesListComponent implements OnInit {

  phrases!: Phrase[];

  constructor(
    private phraseService: PhraseService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.phraseService
        .getAllPhrases()
        .then(result => this.phrases = result);
  }

  onSelect(phrase: Phrase) {
    this.router.navigate(['phrase', phrase.id]);
  }

}
