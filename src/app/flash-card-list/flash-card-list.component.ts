import { AsyncPipe } from '@angular/common';
import { Component, inject, Injectable, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { v4 as uuidv4 } from 'uuid';
import { FlashCard } from '../app.models';
import { FlashCardComponent } from '../flash-card/flash-card.component';
import { addOneFlashCard } from '../state/flash-cards.reducer';
import { selectAllFlashCards } from '../state/flash-cards.selectors';

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-flash-card-list',
  standalone: true,
  imports: [AsyncPipe, FlashCardComponent],
  templateUrl: './flash-card-list.component.html',
  styleUrl: './flash-card-list.component.css'
})
export class FlashCardListComponent implements OnInit {
  store = inject(Store);
  allFlashCards = this.store.select(selectAllFlashCards);

  ngOnInit(): void {
    // Inject example cards
    // Since this isn't hooked up to a backend, we generate UUIDs here
    this.store.dispatch(addOneFlashCard({
      flashCard: {
        id: uuidv4(),
        question: 'What is the capital of France?',
        answer: 'Paris',
      }
    }));
    this.store.dispatch(addOneFlashCard({
      flashCard: {
        id: uuidv4(),
        question: 'What is the capital of Spain?',
        answer: 'Madrid',
      }
    }));
  }

  addFlashCard(flashCard: FlashCard): void {
    // flash card must be wrapped with '{}' to be passed as an object instead of the flash card itself
    this.store.dispatch(addOneFlashCard({ flashCard }));
  }

  updateFlashCard(flashCardID: string): void {
    // Update a flash card
    // For example, we could update the question of the first flash card
  //   this.card = selectFlashCardById(flashCardID);
  //   this.store.dispatch(updateFlashCard({
  //     flashCard: {
  //       id: card.edit().id,
  //       question: 'What is the capital of Spain?',
  //       answer: 'Madrid',
  //     }
  // }))
  }
}
