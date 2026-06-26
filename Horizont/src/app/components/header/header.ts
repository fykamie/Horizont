import { Component } from '@angular/core';
import { faBookOpen, faHeadphones, faVideoCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'myHeader',
  imports: [FontAwesomeModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  bookIcon = faBookOpen;
  audioIcon = faHeadphones;
  videoIcon = faVideoCamera;
}
