import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../shared/providers/modal.service';

@Component({
  selector: 'app-imprint-modal',
  templateUrl: './imprint-modal.component.html',
  styleUrls: ['./imprint-modal.component.scss'],
})
export class ImprintModalComponent implements OnInit {

  @Input() title = 'Modal Page';
  @Input() text = `
    A ​flashcard​ or ​flash card​ is a card bearing ​information​ on both sides, which is intended to be used as an aid in
    memorization​. Each flashcard bears a question on one side and an answer on the other. Flashcards are often
    used to memorize ​vocabulary​, historical dates, formulas or any subject matter that can be learned via a
    question-and-answer format. Flashcards can be virtual (part of a ​flashcard software​), or physical.
    Flashcards are an application of the ​testing effect​ − the finding that ​long-term memory​ is increased when some
    of the learning period is devoted to retrieving the information through testing with proper feedback. Study habits
    affect the rate at which a flashcard-user learns, and proper ​spacing of flashcards​ has been proven to accelerate
    learning
  `;

  constructor(private modalSvc: ModalService) { }

  ngOnInit() { }

  close() {
    this.modalSvc.dismissModal();
  }

}
