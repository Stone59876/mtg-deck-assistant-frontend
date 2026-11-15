import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

type Deck = {
  id: number;
  name: string;
  cardCount: number;
  imageUrl: string;
};

@Component({
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  selector: 'app-decks',
  styleUrl: './decks.scss',
  templateUrl: './decks.html',
})
export class Decks {
  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  editDeck(id: number) {
    console.log(`Edit deck with ID: ${id}`);
    this.router.navigate(['/decks', id]); // Navigate to the deck details page
    // Implement your edit logic here
  }

  createDeck() {
    console.log(`Create deck`);
    this.router.navigate(['/decks/create']); // Navigate to the deck details page
    // Implement your edit logic here
  }

  deleteDeck(deckId: number) {
    console.log(`Delete deck with ID: ${deckId}`);
    // Implement your delete logic here
  }

  decks: Array<Deck> = [
    {
      id: 1,
      name: 'Iron Man',
      cardCount: 20,
      imageUrl:
        'https://cards.scryfall.io/display/front/7/5/7542b1d1-e34d-46dc-af24-1b718034c0e4.webp?1783909140',
    },
    {
      id: 2,
      name: 'Sauron, the Dark Lord',
      cardCount: 100,
      imageUrl:
        'https://cards.scryfall.io/display/front/0/3/034e0929-b2c7-4b5f-94f2-8eaf4fb1a2a1.webp?1783916249',
    },
    {
      id: 3,
      name: 'Vampire',
      cardCount: 78,
      imageUrl:
        'https://cards.scryfall.io/display/front/8/f/8f54c6ce-fde4-47ef-a106-5c68b4397f99.webp?1783925008',
    },
    {
      id: 4,
      name: "Atraxa, Praetors' Voice",
      cardCount: 75,
      imageUrl:
        'https://cards.scryfall.io/display/front/d/0/d0d33d52-3d28-4635-b985-51e126289259.webp?1783930136',
    },
    {
      id: 5,
      name: 'The Ur-Dragon',
      cardCount: 100,
      imageUrl:
        'https://cards.scryfall.io/display/front/1/0/10d42b35-844f-4a64-9981-c6118d45e826.webp?1783915607',
    },
    {
      id: 6,
      name: 'Edgar Markov',
      cardCount: 100,
      imageUrl:
        'https://cards.scryfall.io/display/front/a/5/a577ba08-0aa8-45be-aa83-d5078770127c.webp?1783908078',
    },
    {
      id: 7,
      name: 'Muldrotha, the Gravetide',
      cardCount: 91,
      imageUrl:
        'https://cards.scryfall.io/display/front/7/0/705b4d97-2f50-47f7-9053-d748f4337553.webp?1783904538',
    },
    {
      id: 8,
      name: 'Korvold, Fae-Cursed King',
      cardCount: 84,
      imageUrl:
        'https://api.scryfall.com/cards/named?exact=Korvold%2C%20Fae-Cursed%20King&format=image&version=normal',
    },
    {
      id: 9,
      name: 'Krenko, Mob Boss',
      cardCount: 100,
      imageUrl:
        'https://api.scryfall.com/cards/named?exact=Krenko%2C%20Mob%20Boss&format=image&version=normal',
    },
    {
      id: 10,
      name: 'Kaalia of the Vast',
      cardCount: 67,
      imageUrl:
        'https://api.scryfall.com/cards/named?exact=Kaalia%20of%20the%20Vast&format=image&version=normal',
    },
    {
      id: 11,
      name: "Yuriko, the Tiger's Shadow",
      cardCount: 100,
      imageUrl:
        'https://api.scryfall.com/cards/named?exact=Yuriko%2C%20the%20Tiger%27s%20Shadow&format=image&version=normal',
    },
    {
      id: 12,
      name: 'Miirym, Sentinel Wyrm',
      cardCount: 96,
      imageUrl:
        'https://api.scryfall.com/cards/named?exact=Miirym%2C%20Sentinel%20Wyrm&format=image&version=normal',
    },
    {
      id: 13,
      name: 'Isshin, Two Heavens as One',
      cardCount: 100,
      imageUrl:
        'https://api.scryfall.com/cards/named?exact=Isshin%2C%20Two%20Heavens%20as%20One&format=image&version=normal',
    },
    {
      id: 14,
      name: 'Prosper, Tome-Bound',
      cardCount: 45,
      imageUrl:
        'https://api.scryfall.com/cards/named?exact=Prosper%2C%20Tome-Bound&format=image&version=normal',
    },
    {
      id: 15,
      name: 'Wilhelt, the Rotcleaver',
      cardCount: 100,
      imageUrl:
        'https://api.scryfall.com/cards/named?exact=Wilhelt%2C%20the%20Rotcleaver&format=image&version=normal',
    },
    {
      id: 16,
      name: 'Meren of Clan Nel Toth',
      cardCount: 55,
      imageUrl:
        'https://api.scryfall.com/cards/named?exact=Meren%20of%20Clan%20Nel%20Toth&format=image&version=normal',
    },
    {
      id: 17,
      name: 'Jodah, the Unifier',
      cardCount: 100,
      imageUrl:
        'https://api.scryfall.com/cards/named?exact=Jodah%2C%20the%20Unifier&format=image&version=normal',
    },
    {
      id: 18,
      name: 'Chulane, Teller of Tales',
      cardCount: 32,
      imageUrl:
        'https://api.scryfall.com/cards/named?exact=Chulane%2C%20Teller%20of%20Tales&format=image&version=normal',
    },
    {
      id: 19,
      name: 'Aesi, Tyrant of Gyre Strait',
      cardCount: 100,
      imageUrl:
        'https://api.scryfall.com/cards/named?exact=Aesi%2C%20Tyrant%20of%20Gyre%20Strait&format=image&version=normal',
    },
    {
      id: 20,
      name: 'Lathril, Blade of the Elves',
      cardCount: 75,
      imageUrl:
        'https://api.scryfall.com/cards/named?exact=Lathril%2C%20Blade%20of%20the%20Elves&format=image&version=normal',
    },
    {
      id: 21,
      name: 'Pantlaza, Sun-Favored',
      cardCount: 100,
      imageUrl:
        'https://api.scryfall.com/cards/named?exact=Pantlaza%2C%20Sun-Favored&format=image&version=normal',
    },
    {
      id: 22,
      name: 'Nekusar, the Mindrazer',
      cardCount: 88,
      imageUrl:
        'https://api.scryfall.com/cards/named?exact=Nekusar%2C%20the%20Mindrazer&format=image&version=normal',
    },
    {
      id: 23,
      name: 'Sisay, Weatherlight Captain',
      cardCount: 100,
      imageUrl:
        'https://api.scryfall.com/cards/named?exact=Sisay%2C%20Weatherlight%20Captain&format=image&version=normal',
    },
    {
      id: 24,
      name: 'Teysa Karlov',
      cardCount: 84,
      imageUrl:
        'https://api.scryfall.com/cards/named?exact=Teysa%20Karlov&format=image&version=normal',
    },
    {
      id: 25,
      name: 'Brago, King Eternal',
      cardCount: 100,
      imageUrl:
        'https://api.scryfall.com/cards/named?exact=Brago%2C%20King%20Eternal&format=image&version=normal',
    },
    {
      id: 26,
      name: 'Frodo, Adventurous Hobbit',
      cardCount: 70,
      imageUrl:
        'https://api.scryfall.com/cards/named?exact=Frodo%2C%20Adventurous%20Hobbit&format=image&version=normal',
    },
    {
      id: 27,
      name: 'Sam, Loyal Attendant',
      cardCount: 100,
      imageUrl:
        'https://api.scryfall.com/cards/named?exact=Sam%2C%20Loyal%20Attendant&format=image&version=normal',
    },
    {
      id: 28,
      name: 'Aragorn, the Uniter',
      cardCount: 96,
      imageUrl:
        'https://api.scryfall.com/cards/named?exact=Aragorn%2C%20the%20Uniter&format=image&version=normal',
    },
    {
      id: 29,
      name: 'Omnath, Locus of Creation',
      cardCount: 100,
      imageUrl:
        'https://api.scryfall.com/cards/named?exact=Omnath%2C%20Locus%20of%20Creation&format=image&version=normal',
    },
    {
      id: 30,
      name: "Gishath, Sun's Avatar",
      cardCount: 25,
      imageUrl:
        'https://api.scryfall.com/cards/named?exact=Gishath%2C%20Sun%27s%20Avatar&format=image&version=normal',
    },
    {
      id: 31,
      name: 'Zhulodok, Void Gorger',
      cardCount: 100,
      imageUrl:
        'https://api.scryfall.com/cards/named?exact=Zhulodok%2C%20Void%20Gorger&format=image&version=normal',
    },
    {
      id: 32,
      name: 'Yidris, Maelstrom Wielder',
      cardCount: 55,
      imageUrl:
        'https://api.scryfall.com/cards/named?exact=Yidris%2C%20Maelstrom%20Wielder&format=image&version=normal',
    },
    {
      id: 33,
      name: 'Tovolar, Dire Overlord',
      cardCount: 100,
      imageUrl:
        'https://api.scryfall.com/cards/named?exact=Tovolar%2C%20Dire%20Overlord&format=image&version=normal',
    },
  ];
}
