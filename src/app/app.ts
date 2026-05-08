import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header';
import { FooterComponent } from './layout/footer/footer';
import { SupportSectionComponent } from './layout/support-section/support-section';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SupportSectionComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
