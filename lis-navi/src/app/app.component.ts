import { Component } from '@angular/core';
import { PwaService } from './core/services/pwa';

@Component({
  selector: 'app-root',
  template: `
    <div class="global" [ngClass]="{'overflow-hidden' : newVersionVisibility}">

      <!-- Confirmation de mise à jour vers une nouvelle version -->
      <div *ngIf="newVersionVisibility">
        <app-popup-confirm
          [message]="message"
          [messageConfirm]="messageConfirm"
          [messageCancel]="messageCancel"
          (confirm)="reloadApp()"
          (cancel)="closePopup()"></app-popup-confirm>
      </div>

      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lis-navi';

  constructor(
    private pwaService: PwaService,
  ) { }

  // variables pour la popup de validation de mise à jour vers la nouvelle version
  newVersionVisibility : boolean = false;
  message: string = 'Une nouvelle version est disponible, voulez-vous actualiser ?';
  messageConfirm: string = 'oui';
  messageCancel: string = 'non';

  ngOnInit(): void {
    // Appelée si une nouvelle version de l'application
    // est détectée par le service worker, permet d'ouvrir la popup pour demander
    // à l'utilisateur s'il veut recharger l'application
    this.pwaService.newVersion.subscribe((_) => {
      this.newVersionVisibility = true;
    });
  }

  /* - - - Fonctions pour rechargement de l'application - - - */

  /**
   * Fonction appelée si l'utilisateur
   * accepte de mettre à jour l'application
   */
  reloadApp() {
    window.location.reload();
    this.newVersionVisibility = false;
  }

  /**
   * Fonction appelée si l'utilisateur
   * ferme la popup de demande de mise à jour
   */
  closePopup() {
    this.newVersionVisibility = false;
  }

  /* - - - Fin fonctions pour rechargement de l'application - - - */

}
