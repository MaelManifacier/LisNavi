import { Story } from "../model/story.model";

export const PAGESLERASSEMBLEMENT: Story = {
  title: 'Le rassemblement',
  url: 'le-rassemblement',
  img: 'assets/story/le-rassemblement/door.svg',
  btnLast: 'assets/story/le-rassemblement/last.svg',
  btnNext: 'assets/story/le-rassemblement/next.svg',
  pages: [
    {
      noPage: 1,
      texts: [
        `OUI<br/>`,
        `<br/>`,
      ],
      imgs: [
        '',
        ''
      ],
      isBackground: false,
      isFlower: false,
    },
    {
      noPage: 2,
      texts: [
        `VOILA<br/>`,
        `<br/>`,
      ],
      imgs: [
        '',
        ''
      ],
      isBackground: false,
      isFlower: false,
    },
  ],
};
