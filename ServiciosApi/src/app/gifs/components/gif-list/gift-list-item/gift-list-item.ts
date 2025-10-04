import { Component, input } from '@angular/core';

@Component({
  selector: 'gif-list-item',
  imports: [],
  templateUrl: './gift-list-item.html',
  styles: ``
})
export class GiftListItem {
  imageUrl = input.required<string>();
}
