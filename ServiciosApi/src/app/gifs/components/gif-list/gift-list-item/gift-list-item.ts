import { Component, input } from '@angular/core';
import { Gif } from 'src/app/gifs/interfaces/giphy.interfaces';

@Component({
  selector: 'gif-list-item',
  imports: [],
  templateUrl: './gift-list-item.html',
  styles: ``
})
export class GiftListItem {
  gif = input.required<Gif>();
}
