import { Component, VERSION } from '@angular/core';
import { ContentDialogComponent } from './content-dialog/content-dialog.component';
import { DialogService } from './dialog/dialog.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular Custom Dialog Dynamic' + VERSION.major;
  constructor(public dialog: DialogService) {}

  open() {
    const ref = this.dialog.open(ContentDialogComponent, {
      data: { message: 'I am a dynamic component inside of a dialog!' }
    });

    ref.afterClosed.subscribe(result => {
      console.log('Dialog closed ==> ', result);
    });
  }
}
