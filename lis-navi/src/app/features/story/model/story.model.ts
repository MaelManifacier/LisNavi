import { Page } from "./page.model";

export interface Story {
  title: string;
  url: string;
  img: string;
  btnLast?: string;
  btnNext?: string;
  pages: Page[];
}
