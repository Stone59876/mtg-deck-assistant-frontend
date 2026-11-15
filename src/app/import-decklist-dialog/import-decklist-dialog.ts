import { Component } from '@angular/core';
import { MatDialogModule, MatDialogActions, MatDialogContent } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [MatDialogModule, FormsModule],
  selector: 'app-import-decklist-dialog',
  styleUrl: './import-decklist-dialog.scss',
  templateUrl: './import-decklist-dialog.html',
})
export class ImportDecklistDialog {
  decklist = '';
}
