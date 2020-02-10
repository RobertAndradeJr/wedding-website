export interface InstagramResponse {
  data: Array<InstaData>;
  error: {};
}

export interface InstaCaption {
  edges: Array<Record<string, Record<string, string>>>;
}

export interface InstaEdge {
  node: InstaNode;
}

export interface InstaNode {
  shortcode: string;
  id: string;
  thumbnail_resources: Record<string, Record<string, string>>;
  edge_media_to_caption: InstaCaption;
}

export interface InstaData {
  shortcode: string;
  id: string;
  thumb: string;
  caption: string;
}
