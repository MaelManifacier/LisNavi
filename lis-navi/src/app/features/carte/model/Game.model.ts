export class Game {
  ctx: any;
  _previousElapsed: any;

  constructor() {}

  run(context: any): void {
    this.ctx = context;
    this._previousElapsed = 0;
    this.init();
    window.requestAnimationFrame(this.tick);
  }

  tick(elapsed: any): void {
    window.requestAnimationFrame(this.tick);

    // clear previous frame
    this.ctx.clearRect(0, 0, 512, 512);

    // compute delta time in seconds -- also cap it
    let delta = (elapsed - this._previousElapsed) / 1000.0;
    delta = Math.min(delta, 0.25); // maximum delta of 250 ms
    this._previousElapsed = elapsed;

    this.update(delta);
    this.render();
  }

  init(): void {

  }

  update(delta: any): void {

  }

  render(): void {

  }
}
