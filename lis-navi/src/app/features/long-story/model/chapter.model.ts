import { Page } from "./page.model";

export interface Chapter {
  title: string;
  storyName?: string;
  url: string;
  img?: string;
  btnLast?: string;
  btnNext?: string;
  pages: Page[];
}
