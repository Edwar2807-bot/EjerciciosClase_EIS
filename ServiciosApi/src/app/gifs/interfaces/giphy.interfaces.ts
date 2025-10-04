export interface GiphyResponse{
    data: GiphyItem[]
}

export interface GiphyItem{
    id: string;
    title: string;
    images: GiphyImage;
}

export interface GiphyImage{
    original: {
        url: string;
    }
}

export interface Gif{
    id: string;
    title: string;
    url: string;
}