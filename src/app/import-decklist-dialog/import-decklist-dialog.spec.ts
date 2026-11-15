import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImportDecklistDialog } from './import-decklist-dialog';

describe('ImportDecklistDialog', () => {
  let component: ImportDecklistDialog;
  let fixture: ComponentFixture<ImportDecklistDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportDecklistDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(ImportDecklistDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
