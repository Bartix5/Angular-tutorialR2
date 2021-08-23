import { Component } from '@angular/core';
import { Quotation } from './models/quotation';
import { QUOTES } from './models/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-tutorialR2';
  quotes: Quotation[] = QUOTES;

  addVote(quotation: Quotation, value: number) {
    quotation.votes += value;
  }
  onNewQuotation(quotation: Quotation) {
    this.quotes.unshift(quotation)
  }

}
