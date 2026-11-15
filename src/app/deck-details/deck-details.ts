import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { ImportDecklistDialog } from '../import-decklist-dialog/import-decklist-dialog';

type Deck = {
  id: number;
  name: string;
  cardCount: number;
  imageUrl: string;
  slots: Array<DeckSlot>;
};

type DeckSlot = {
  id: number;
  cardName: string;
  quantity: number;
  type: string;
};

type SuggestionPack = {
  name: string;
  description: string;
  cards: Array<DeckSlot>;
};

@Component({
  imports: [MatIconModule, MatButtonModule, FormsModule, MatSnackBarModule, MatDialogModule],
  selector: 'app-deck-details',
  styleUrl: './deck-details.scss',
  templateUrl: './deck-details.html',
})
export class DeckDetails {
  deckId: number | null = null;

  commanderCardId: number | null = 1;

  commanderCardName: string | null = 'Iron Man, Titan of Innovation';

  selectedCardName: string | null = null;

  selectedQuantity: number | null = null;

  selectedCard: DeckSlot | null = null;

  suggestions: Array<DeckSlot> | null = null;

  suggestionPack: Array<SuggestionPack> | null = null;

  selectedSuggestion: SuggestionPack | null = null;

  addedCard: string | null = null;

  suggestionPrompt: string | null = null;

  deckNameEditing: boolean | null = false;

  @ViewChild('packContainer')
  packContainer!: ElementRef<HTMLDivElement>;

  addCard() {
    console.log('Add card button clicked');
    const newId = this.deck.slots[this.deck.slots.length - 1].id + 10000;
    if (this.addedCard !== null && this.addedCard !== undefined) {
      this.deck.slots.push({ id: newId, cardName: this.addedCard, quantity: 1, type: 'Creature' });
    }
    this.refreshDeckSlots();
    let snackBarRef = this.snackBar.open('Card added to deck !', undefined, {
      duration: 3000,
    });
    // Implement your add card logic here
  }

  refreshDeckSlots() {
    const deckSlots: Array<{ name: string; cards: Array<DeckSlot> }> = [
      { name: 'Creatures', cards: this.deck.slots.filter((slot) => slot.type === 'Creature') },
      { name: 'Sorceries', cards: this.deck.slots.filter((slot) => slot.type === 'Sorcery') },
      { name: 'Instants', cards: this.deck.slots.filter((slot) => slot.type === 'Instant') },
      { name: 'Artifacts', cards: this.deck.slots.filter((slot) => slot.type === 'Artifact') },
      {
        name: 'Enchantments',
        cards: this.deck.slots.filter((slot) => slot.type === 'Enchantment'),
      },
      {
        name: 'Planeswalkers',
        cards: this.deck.slots.filter((slot) => slot.type === 'Planeswalker'),
      },
      { name: 'Lands', cards: this.deck.slots.filter((slot) => slot.type === 'Land') },
    ];
    this.deckSlot = deckSlots;
  }

  scrollPacks(direction: number) {
    this.packContainer.nativeElement.scrollBy({
      left: direction * 500,
      behavior: 'smooth',
    });
  }

  selectCard(cardName: string) {
    this.selectedCardName = cardName;
    const card = this.deck.slots.find((slot) => slot.cardName === cardName);
    if (card != null) {
      this.selectedCard = card;
      this.selectedQuantity = this.selectedCard.quantity;
    } else {
      this.selectedCard = { id: 0, cardName: cardName, quantity: 0, type: '' };
      this.selectedQuantity = 0;
    }
    console.log(`Selected card with ID: ${cardName}`);
  }

  editName() {
    console.log('editing deck name');
    if (this.deckNameEditing && this.deckName !== null) {
      this.deck.name = this.deckName;
    }
    this.deckNameEditing = !this.deckNameEditing;
  }

  addQuantity() {
    if (this.selectedQuantity != null) {
      this.selectedQuantity = this.selectedQuantity + 1;
      if (this.selectedCard != null) {
        this.selectedCard.quantity = this.selectedQuantity;
      }
    }
  }

  removeQuantity() {
    if (this.selectedQuantity != null && this.selectedQuantity > 0) {
      this.selectedQuantity = this.selectedQuantity - 1;
      if (this.selectedCard != null) {
        this.selectedCard.quantity = this.selectedQuantity;
      }
    }
  }

  hideSuggestions() {
    this.suggestionPack = null;
    this.suggestions = null;
  }

  getSuggestionsDetails(packName: string) {
    if (this.suggestionPack !== null) {
      const pack = this.suggestionPack.find((pack) => pack.name === packName);
      if (pack !== null && pack !== undefined) {
        this.selectedSuggestion = pack;
        this.suggestions = pack.cards;
      }
    }
  }

  getSuggestions() {
    let snackBarRef = this.snackBar.open('Suggestion requested !', undefined, {
      duration: 3000,
    });
    console.log('Get suggestions for prompt' + this.suggestionPrompt);
    this.suggestionPack = [
      {
        name: 'Ramp',
        description: 'Increase your mana acceleration.',
        cards: [
          { id: 1001, cardName: 'Sol Ring', quantity: 1, type: 'Artifact' },
          { id: 1002, cardName: 'Arcane Signet', quantity: 1, type: 'Artifact' },
          { id: 1003, cardName: 'Fellwar Stone', quantity: 1, type: 'Artifact' },
          { id: 1004, cardName: 'Mind Stone', quantity: 1, type: 'Artifact' },
          { id: 1005, cardName: 'Thought Vessel', quantity: 1, type: 'Artifact' },
          { id: 1006, cardName: "Wayfarer's Bauble", quantity: 1, type: 'Artifact' },
          { id: 1007, cardName: 'Coldsteel Heart', quantity: 1, type: 'Artifact' },
          { id: 1008, cardName: 'Chromatic Lantern', quantity: 1, type: 'Artifact' },
          { id: 1009, cardName: 'Talisman of Progress', quantity: 1, type: 'Artifact' },
          { id: 1010, cardName: 'Talisman of Creativity', quantity: 1, type: 'Artifact' },
        ],
      },
      {
        name: 'Board Wipes',
        description: 'Reset the battlefield when opponents get ahead.',
        cards: [
          { id: 1011, cardName: 'Wrath of God', quantity: 1, type: 'Sorcery' },
          { id: 1012, cardName: 'Supreme Verdict', quantity: 1, type: 'Sorcery' },
          { id: 1013, cardName: 'Blasphemous Act', quantity: 1, type: 'Sorcery' },
          { id: 1014, cardName: 'Austere Command', quantity: 1, type: 'Sorcery' },
          { id: 1015, cardName: 'Farewell', quantity: 1, type: 'Sorcery' },
          { id: 1016, cardName: 'Vanquish the Horde', quantity: 1, type: 'Sorcery' },
          { id: 1017, cardName: 'Hour of Revelation', quantity: 1, type: 'Sorcery' },
          { id: 1018, cardName: 'Damn', quantity: 1, type: 'Sorcery' },
          { id: 1019, cardName: 'Winds of Abandon', quantity: 1, type: 'Sorcery' },
          { id: 1020, cardName: 'Cyclonic Rift', quantity: 1, type: 'Instant' },
        ],
      },
      {
        name: 'Card Draw',
        description: 'Improve card advantage and hand consistency.',
        cards: [
          { id: 1021, cardName: 'Rhystic Study', quantity: 1, type: 'Enchantment' },
          { id: 1022, cardName: 'Mystic Remora', quantity: 1, type: 'Enchantment' },
          { id: 1023, cardName: 'Esper Sentinel', quantity: 1, type: 'Creature' },
          { id: 1024, cardName: 'The One Ring', quantity: 1, type: 'Artifact' },
          { id: 1025, cardName: 'Windfall', quantity: 1, type: 'Sorcery' },
          { id: 1026, cardName: 'Faithless Looting', quantity: 1, type: 'Sorcery' },
          { id: 1027, cardName: 'Big Score', quantity: 1, type: 'Instant' },
          { id: 1028, cardName: 'Fact or Fiction', quantity: 1, type: 'Instant' },
          { id: 1029, cardName: 'Ponder', quantity: 1, type: 'Sorcery' },
          { id: 1030, cardName: 'Brainstorm', quantity: 1, type: 'Instant' },
        ],
      },
      {
        name: 'Removal',
        description: 'Add flexible answers to opposing threats.',
        cards: [
          { id: 1031, cardName: 'Swords to Plowshares', quantity: 1, type: 'Instant' },
          { id: 1032, cardName: 'Path to Exile', quantity: 1, type: 'Instant' },
          { id: 1033, cardName: 'Generous Gift', quantity: 1, type: 'Instant' },
          { id: 1034, cardName: 'Chaos Warp', quantity: 1, type: 'Instant' },
          { id: 1035, cardName: 'Abrade', quantity: 1, type: 'Instant' },
          { id: 1036, cardName: 'Dispatch', quantity: 1, type: 'Instant' },
          { id: 1037, cardName: 'Reality Shift', quantity: 1, type: 'Instant' },
          { id: 1038, cardName: 'Resculpt', quantity: 1, type: 'Instant' },
          { id: 1039, cardName: 'Pongify', quantity: 1, type: 'Instant' },
          { id: 1040, cardName: 'Rapid Hybridization', quantity: 1, type: 'Instant' },
        ],
      },
      {
        name: 'Artifact Synergy',
        description: 'Strengthen your artifact-focused game plan.',
        cards: [
          { id: 1041, cardName: 'Sai, Master Thopterist', quantity: 1, type: 'Creature' },
          { id: 1042, cardName: 'Emry, Lurker of the Loch', quantity: 1, type: 'Creature' },
          { id: 1043, cardName: 'Goblin Engineer', quantity: 1, type: 'Creature' },
          { id: 1044, cardName: 'Goblin Welder', quantity: 1, type: 'Creature' },
          { id: 1045, cardName: 'Thought Monitor', quantity: 1, type: 'Creature' },
          { id: 1046, cardName: 'Foundry Inspector', quantity: 1, type: 'Creature' },
          { id: 1047, cardName: 'Unwinding Clock', quantity: 1, type: 'Artifact' },
          { id: 1048, cardName: 'Trading Post', quantity: 1, type: 'Artifact' },
          { id: 1049, cardName: 'Thopter Spy Network', quantity: 1, type: 'Enchantment' },
          { id: 1050, cardName: 'Efficient Construction', quantity: 1, type: 'Enchantment' },
        ],
      },
    ];
  }

  deselectCard() {
    this.selectedCardName = null;
    console.log('Deselected card');
  }

  getCardImageUrl(cardId: number): string {
    const card = this.deck.slots.find((slot) => slot.id === cardId);
    const cardName = card ? card.cardName : '';
    return `https://api.scryfall.com/cards/named?exact=${encodeURIComponent(cardName)}&format=image&version=normal`;
  }

  getCardImageUrlByName(cardName: string): string {
    return `https://api.scryfall.com/cards/named?exact=${encodeURIComponent(cardName)}&format=image&version=normal`;
  }
  getCardName(cardId: number): string {
    const card = this.deck.slots.find((slot) => slot.id === cardId);
    return card ? card.cardName : '';
  }

  getCardQuantity(cardId: number): number {
    const card = this.deck.slots.find((slot) => slot.id === cardId);
    return card ? card.quantity : 0;
  }

  goBack() {
    window.history.back();
  }

  setCommander() {
    if (this.selectedCard !== null && this.selectedCard !== undefined) {
      this.commanderCardId = this.selectedCard?.id;
      let snackBarRef = this.snackBar.open('Commander set !', undefined, {
        duration: 3000,
      });
    }
  }

  editCard(cardId: number) {
    console.log(`Edit card with ID: ${cardId}`);
    // Implement your edit logic here
  }

  deleteCard(cardId: number) {
    let snackBarRef = this.snackBar.open('Card deleted !', undefined, {
      duration: 3000,
    });
    console.log(`Delete card with ID: ${cardId}`);
    // Implement your delete logic here
  }

  validateDeck() {
    console.log('validatin deck');
  }
  importDecklist() {
    console.log('import decklist');
    const dialogRef = this.dialog.open(ImportDecklistDialog, {
      width: '850px',
      maxWidth: '90vw',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result);
        let snackBarRef = this.snackBar.open('Decklist Imported !', undefined, {
          duration: 3000,
        });
      }
    });
  }

  setAsImage() {
    if (this.selectedCard !== null) {
      this.deck.imageUrl = this.getCardImageUrlByName(this.selectedCard.cardName);
      let snackBarRef = this.snackBar.open('Set card as image', undefined, {
        duration: 3000,
      });
    }
  }

  deck: Deck = {
    id: 1,
    name: 'Iron Man',
    cardCount: 20,
    imageUrl:
      'https://cards.scryfall.io/display/front/7/5/7542b1d1-e34d-46dc-af24-1b718034c0e4.webp?1783909140',
    slots: [
      { id: 1, cardName: 'Iron Man, Titan of Innovation', quantity: 1, type: 'Creature' },
      { id: 2, cardName: 'Captain America, First Avenger', quantity: 2, type: 'Creature' },
      { id: 3, cardName: 'Thor, God of Thunder', quantity: 3, type: 'Creature' },
      { id: 4, cardName: 'Hulk, brutal brawler', quantity: 4, type: 'Creature' },
      { id: 5, cardName: 'Black Widow,super spy', quantity: 5, type: 'Creature' },
      { id: 6, cardName: 'Hawkeye,young avenger', quantity: 6, type: 'Creature' },
      { id: 7, cardName: 'Spectacular Spider-Man', quantity: 7, type: 'Creature' },
      { id: 8, cardName: 'Doctor Strange,master of magic', quantity: 8, type: 'Creature' },
      { id: 9, cardName: 'Black Panther,wakandan king', quantity: 9, type: 'Creature' },
      { id: 10, cardName: 'Ant-Man,elusive avenger', quantity: 10, type: 'Creature' },
      { id: 11, cardName: 'Dark Ritual', quantity: 1, type: 'Sorcery' },
      { id: 12, cardName: 'Lightning Bolt', quantity: 2, type: 'Instant' },
      { id: 13, cardName: 'Counterspell', quantity: 3, type: 'Instant' },
      { id: 14, cardName: 'Giant Growth', quantity: 4, type: 'Instant' },
      { id: 15, cardName: 'Divination', quantity: 5, type: 'Sorcery' },
      { id: 16, cardName: 'Demonic Tutor', quantity: 6, type: 'Sorcery' },
      { id: 17, cardName: 'Wrath of God', quantity: 7, type: 'Sorcery' },
      { id: 18, cardName: 'Swords to Plowshares', quantity: 8, type: 'Instant' },
      { id: 19, cardName: 'Path to Exile', quantity: 9, type: 'Instant' },
      { id: 20, cardName: 'Brainstorm', quantity: 10, type: 'Instant' },
      { id: 21, cardName: 'Sol Ring', quantity: 1, type: 'Artifact' },
      { id: 22, cardName: 'Mox Sapphire', quantity: 2, type: 'Artifact' },
      { id: 23, cardName: 'Mox Jet', quantity: 3, type: 'Artifact' },
      { id: 24, cardName: 'Mox Pearl', quantity: 4, type: 'Artifact' },
      { id: 25, cardName: 'Mox Ruby', quantity: 5, type: 'Artifact' },
      { id: 26, cardName: 'Mox Emerald', quantity: 6, type: 'Artifact' },
      { id: 27, cardName: 'Black Lotus', quantity: 7, type: 'Artifact' },
      { id: 28, cardName: 'Time Walk', quantity: 8, type: 'Sorcery' },
      { id: 29, cardName: 'Ancestral Recall', quantity: 9, type: 'Instant' },
      { id: 30, cardName: 'Timetwister', quantity: 10, type: 'Sorcery' },
      { id: 31, cardName: 'Island', quantity: 10, type: 'Land' },
      { id: 32, cardName: 'Mountain', quantity: 10, type: 'Land' },
      { id: 33, cardName: 'Swamp', quantity: 10, type: 'Land' },
      { id: 34, cardName: 'Forest', quantity: 10, type: 'Land' },
      { id: 35, cardName: 'Plains', quantity: 10, type: 'Land' },
      { id: 36, cardName: 'Ajani, Caller of the Pride', quantity: 1, type: 'Planeswalker' },
      { id: 37, cardName: 'Jace, the Mind Sculptor', quantity: 2, type: 'Planeswalker' },
      { id: 38, cardName: 'Liliana of the Veil', quantity: 3, type: 'Planeswalker' },
      { id: 39, cardName: 'Chandra, Torch of Defiance', quantity: 4, type: 'Planeswalker' },
      { id: 40, cardName: 'Nicol Bolas, Dragon-God', quantity: 5, type: 'Planeswalker' },
      { id: 41, cardName: 'Mantle of the Ancients', quantity: 1, type: 'Enchantment' },
      { id: 42, cardName: 'Curiosity', quantity: 2, type: 'Enchantment' },
      { id: 43, cardName: 'Propaganda', quantity: 3, type: 'Enchantment' },
      { id: 44, cardName: 'Rhystic Study', quantity: 4, type: 'Enchantment' },
      { id: 45, cardName: 'Phyrexian Arena', quantity: 5, type: 'Enchantment' },
      { id: 46, cardName: 'Necropotence', quantity: 6, type: 'Enchantment' },
      { id: 47, cardName: 'Smothering Tithe', quantity: 7, type: 'Enchantment' },
      { id: 48, cardName: 'Bitterblossom', quantity: 8, type: 'Enchantment' },
      { id: 49, cardName: 'Leyline of the Void', quantity: 9, type: 'Enchantment' },
      { id: 50, cardName: 'Rest in Peace', quantity: 10, type: 'Enchantment' },
      { id: 51, cardName: 'Doctor Doom', quantity: 1, type: 'Creature' },
      { id: 52, cardName: 'Sauron, the dark lord', quantity: 1, type: 'Creature' },
      { id: 53, cardName: 'The Scarlet Witch', quantity: 1, type: 'Creature' },
    ],
  };

  deckSlot: Array<{ name: string; cards: Array<DeckSlot> }> = [
    { name: 'Creatures', cards: this.deck.slots.filter((slot) => slot.type === 'Creature') },
    { name: 'Sorceries', cards: this.deck.slots.filter((slot) => slot.type === 'Sorcery') },
    { name: 'Instants', cards: this.deck.slots.filter((slot) => slot.type === 'Instant') },
    { name: 'Artifacts', cards: this.deck.slots.filter((slot) => slot.type === 'Artifact') },
    { name: 'Enchantments', cards: this.deck.slots.filter((slot) => slot.type === 'Enchantment') },
    {
      name: 'Planeswalkers',
      cards: this.deck.slots.filter((slot) => slot.type === 'Planeswalker'),
    },
    { name: 'Lands', cards: this.deck.slots.filter((slot) => slot.type === 'Land') },
  ];

  deckName: string | null = this.deck.name;

  constructor(
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) {
    this.route.params.subscribe((params) => {
      this.deckId = params['id'] ? parseInt(params['id'], 10) : null;
    });
  }
}
