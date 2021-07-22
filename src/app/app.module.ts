import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ContentDialogComponent } from './content-dialog/content-dialog.component';
import { DialogModule } from './dialog/dialog.module';

@NgModule({
  imports: [BrowserModule, FormsModule, DialogModule],
  declarations: [AppComponent, HelloComponent, ContentDialogComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
