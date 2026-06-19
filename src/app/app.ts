import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import AOS from 'aos';

AOS.init();
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  protected readonly title = signal('nursery_shop');
}
