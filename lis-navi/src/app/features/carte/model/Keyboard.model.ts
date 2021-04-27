export class Keyboard {

  constructor() {}

  images = [];

  loadImage(key: any, src: any): any {
    let img = new Image();

    /*
    let d = new Promise(function (resolve, reject) {
      img.onload = function () {
          this.images[key] = img;
          resolve(img);
      }.bind(this);

      img.onerror = function () {
          reject('Could not load image: ' + src);
      };
    }.bind(this));

    img.src = src;
    return d;
    */
  }

  getImage(key: any): any {
    return (key in this.images) ? this.images[key] : null;
  }
}
