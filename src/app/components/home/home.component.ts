import { Component } from '@angular/core';
import { AdvertismentComponent } from '../advertisment/advertisment.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AdvertismentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
