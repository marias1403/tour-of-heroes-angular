import { Component } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesComponent } from './messages/messages.component';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    HeroesComponent,
    DashboardComponent,
    MessagesComponent,
    RouterOutlet,
    RouterLink
  ],
})
export class AppComponent {
  title = 'Tour of Heroes';
}