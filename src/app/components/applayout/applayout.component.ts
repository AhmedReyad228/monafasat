import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppnavComponent } from '../appnav/appnav.component';

@Component({
  selector: 'app-applayout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AppnavComponent],
  templateUrl: './applayout.component.html',
  styleUrls: ['./applayout.component.scss']
})
export class ApplayoutComponent {

}
