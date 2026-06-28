import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Search } from './components/search/search';
import { Categories } from './components/categories/categories';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    Header,
    Search,
    Categories
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Horizont');
}
