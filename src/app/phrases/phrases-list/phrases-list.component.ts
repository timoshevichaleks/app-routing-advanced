import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Phrase } from '../../shared/phrase.class';
import { PhraseService } from '../../shared/phrase.service';

@Component({
  selector: 'app-phrases-list',
  templateUrl: './phrases-list.component.html',
  styleUrls: ['./phrases-list.component.scss']
})
export class PhrasesListComponent implements OnInit {

  phrases!: Phrase[];
  selectedID!: number;

  constructor(
    private phraseService: PhraseService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param: Params) => {
      this.selectedID = +param.id;
      console.log(this.selectedID);
      this.phraseService
          .getAllPhrases()
          .then(result => this.phrases = result);
    })
  }

  onSelect(phrase: Phrase) {
    this.router.navigate(['phrase', phrase.id]);
  }

  isSelected(phrase: Phrase): boolean {
    return phrase.id === this.selectedID;
  }

}
