import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [MatIconModule, FormsModule],
  selector: 'app-create-deck',
  styleUrl: './create-deck.scss',
  templateUrl: './create-deck.html',
})
export class CreateDeck {
  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }
  createNewDeck() {
    console.log('Create a new deck');
    this.router.navigate(['/decks', 100]); // Navigate to the deck details page
    // Implement your edit logic here
  }

  goBack() {
    window.history.back();
  }
}
