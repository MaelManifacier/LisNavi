export class Page {
  noPage: number;
  texts: string[];
  imgs: string[];
  isBackground?: boolean;
  isFlower?: boolean;

  constructor() {
    this.noPage = 0;
    this.texts = [];
    this.imgs = [];
  }
}
