import { Gif, GiphyItem } from "../interfaces/giphy.interfaces";

export class GifMapper {
    static mapGiphyItemtoGif(giphyItem: GiphyItem): Gif {
        return {
            id: giphyItem.id,
            title: giphyItem.title,
            url: giphyItem.images.original.url
        };
    }

    static mapGiphyItemstoGifArray (giphyItems: GiphyItem[]): Gif[] {
        return giphyItems.map(this.mapGiphyItemtoGif);
    }
}