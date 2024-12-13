import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
    title = input('Test Your Knowledge!');
    addingFlashCard = false;
    takingTest = false;

    addFlashCard() {
        this.addingFlashCard = !this.addingFlashCard;
        console.log(this.addingFlashCard);
    }

    takeTest() {
        this.takingTest = true;
    }
}