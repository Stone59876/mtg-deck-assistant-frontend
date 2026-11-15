import { Routes } from '@angular/router';
import { Decks } from './decks/decks';
import { DeckDetails } from './deck-details/deck-details';
import { CreateDeck } from './create-deck/create-deck';

export const routes: Routes = [
  {
    path: '',
    component: Decks,
  },
  {
    path: 'decks/create',
    component: CreateDeck,
  },
  {
    path: 'decks/:id',
    component: DeckDetails,
  },
];
