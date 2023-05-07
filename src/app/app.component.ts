import { Component } from '@angular/core';
import { SignalsComponent } from './signals/signals.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, SignalsComponent]
})
export class AppComponent {
  title = 'ng-16-explore';
}
