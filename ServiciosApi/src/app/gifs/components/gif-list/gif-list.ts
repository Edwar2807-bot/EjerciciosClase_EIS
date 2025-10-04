import { Component, input } from '@angular/core';
import { GiftListItem } from "./gift-list-item/gift-list-item";

@Component({
  selector: 'gif-list',
  imports: [GiftListItem],
  templateUrl: './gif-list.html',
  styles: ``
})
export class GifList {
  gifs = input.required<string[]>();
}
