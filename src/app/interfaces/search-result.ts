export interface SearchResult {
  id: { videoId: string };
  snippet: {
    thumbnails: { default: Thumbnail; medium: Thumbnail; high: Thumbnail };
  };
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}
