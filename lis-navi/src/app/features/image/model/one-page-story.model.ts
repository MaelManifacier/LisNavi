export interface OnePageStory {
  id: string;
  title: string;
  url: string;
  textImg: TextImg[];
}

export interface TextImg {
  text?: string;
  img?: string;
}
