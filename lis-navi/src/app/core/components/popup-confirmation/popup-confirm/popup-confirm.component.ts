import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup-confirm',
  templateUrl: './popup-confirm.component.html',
  styleUrls: ['./popup-confirm.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopupConfirmComponent implements OnInit {

  @Input() message: string = '';
  @Input() messageConfirm: string = '';
  @Input() messageCancel: string = '';

  @Output() confirm = new EventEmitter<boolean>();
  @Output() cancel = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  sendConfirm() {
    this.confirm.emit(true);
  }

  sendCancel() {
    this.cancel.emit(true);
  }
}
