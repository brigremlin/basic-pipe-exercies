import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "BrIaNnA";
  wallet: number = 50.04;
  loremSentence: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  petThoughts: string[]= ['Cats are awesome.', 'Cats are sneaky.', 'Cats and dogs are both amazing!', 'Dogs are great.', 'Dogs are hyper.'];
  filterResults: string="";
}
