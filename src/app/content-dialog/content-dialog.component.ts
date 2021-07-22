import { Component, OnInit } from '@angular/core';
import { DialogConfig } from '../dialog/dialog-config';
import { DialogRef } from '../dialog/dialog-ref';

@Component({
  selector: 'app-content-dialog',
  templateUrl: './content-dialog.component.html',
  styleUrls: ['./content-dialog.component.css']
})
export class ContentDialogComponent implements OnInit {
  constructor(public config: DialogConfig, public dialog: DialogRef) {}

  ngOnInit() {}

  onClose() {
    this.dialog.close('closed dialog');
  }

  onOk() {
    this.dialog.close('Ok dialog');
  }
}
