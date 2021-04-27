import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Game } from './model/Game.model';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent implements OnInit {

  @ViewChild('board', { static: true })
  canvas?: ElementRef<HTMLCanvasElement>;

  ctx?: CanvasRenderingContext2D;

  // Game object
  Game?: Game;

  map: any;

  constructor(private loaderService: LoaderService) { }

  async ngOnInit(): Promise<void> {
    await this.getMaps();
    this.initBoard();
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent): void {
    if (event.keyCode === KEY.ESC) {
      // this.gameOver();
    }
  }

  getMaps(): void {
    this.map = this.loaderService.getMap('/assets/carte/character.png');
  }

  initBoard(): void {
    // Get the 2D context that we draw on.
    this.ctx = this.canvas?.nativeElement.getContext('2d') || new CanvasRenderingContext2D();

    // Calculate size of canvas from constants.
    this.ctx.canvas.width = COLS * BLOCK_SIZE;
    this.ctx.canvas.height = ROWS * BLOCK_SIZE;

    // Scale so we don't need to give size on every draw.
    this.ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

    this.Game?.run(this.ctx);

    console.log('CONTEXTE : ', this.ctx)
    let img = new Image(); // Image constructor
    img.src = '/assets/carte/character.png';
    // console.log(img)
    // this.ctx.fillStyle = '#FFAAFF';
    // this.ctx.fillRect(1, 1, 6, 9); // x, y, largeur, hauteur
    // this.ctx.drawImage(img, 0, 0, 106, 50);
    // let image = document.getElementById("source") as HTMLImageElement;

    setTimeout(() => {
      console.log('hide');
      if (this.ctx && img) {
        this.ctx.drawImage(img, 1, 1, 1, 1);
      }
    }, 1000);
  }

}

export const COLS = 20;
export const ROWS = 25;
export const BLOCK_SIZE = 30;
export const LINES_PER_LEVEL = 10;

export class KEY {
  static readonly ESC = 27;
  static readonly SPACE = 32;
  static readonly LEFT = 37;
  static readonly UP = 38;
  static readonly RIGHT = 39;
  static readonly DOWN = 40;
}
