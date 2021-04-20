export class Page {
  id?: string;
  noPage: number;
  title?: string;
  // url?: string;
  textImg: TextImg[];

  constructor() {
    this.noPage = 0;
    this.textImg = [];
  }
}

export interface TextImg {
  text?: string;
  img?: string;
}
