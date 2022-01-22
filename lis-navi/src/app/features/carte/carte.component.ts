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
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.initBoard();

    // Refraichissement du navigateur
    // https://developer.mozilla.org/fr/docs/Games/Anatomy
    window.requestAnimationFrame(this.boucle);
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent): void {
    if (event.keyCode === KEY.ESC) {
      // this.gameOver();
    }
  }

  getMaps(): void {
    this.map = this.loaderService.getMap('/assets/carte/tiles.png');
  }

  boucle(): void {
    // this.ctx?.font = '48px serif';
    this.ctx?.fillText('Hello world', 2, 5);
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

    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        this.ctx.fillStyle = '#FFAAFF';
        // this.ctx.fillRect(j * 25, i * 25, 25, 25);
      }
    }

    // après une seconde, affiche les images dans le canvas
    setTimeout(() => {
      console.log('show');
      if (this.ctx && img) {
        // for (var i = 0; i < 3; i++) {
        //   for (var j = 0; j < 3; j++) {
        //     this.ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ',' +
        //                      Math.floor(255 - 42.5 * j) + ',0)';
        //     this.ctx.fillRect(j * 25, i * 25, 25, 25);
        //   }
        // }

        this.ctx.drawImage(img, 1, 1, 1, 1);
        this.ctx.drawImage(img, 4, 4, 4, 2);
        this.ctx?.fillText('Hello world', 2, 5);
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
