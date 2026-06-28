import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'mySearch',
  imports: [FontAwesomeModule],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search {
  searchIcon = faSearch;
}
