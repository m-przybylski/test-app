export interface SearchResult {
  nextPageToken: string;
  items: SearchResultItem[];
}

export interface SearchResultItem {
  id: { videoId: string };
  snippet: {
    title: string;
    thumbnails: { default: Thumbnail; medium: Thumbnail; high: Thumbnail };
  };
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}
