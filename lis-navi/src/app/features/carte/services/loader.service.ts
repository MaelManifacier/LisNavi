import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  getMap(path: string) {
    let img = new Image();
    img.src = path;
    return img;
  }
}
