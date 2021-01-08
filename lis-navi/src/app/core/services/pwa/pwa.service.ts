import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PwaService {

  newVersion: Subject<boolean> = new Subject();

  constructor(private swUpdate: SwUpdate) { }

  checkForUpdates() {
    this.swUpdate.available.subscribe((event) => {
      this.newVersion.next(true);
    });
  }
}
