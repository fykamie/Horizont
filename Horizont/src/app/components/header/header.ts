import { Component } from '@angular/core';
import { faBookOpen, faHeadphones, faVideoCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Search } from '../search/search';
import { Categories } from '../categories/categories';

@Component({
  selector: 'myHeader',
  imports: [FontAwesomeModule,
    Categories,
    Search
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  bookIcon = faBookOpen;
  audioIcon = faHeadphones;
  videoIcon = faVideoCamera;
}
