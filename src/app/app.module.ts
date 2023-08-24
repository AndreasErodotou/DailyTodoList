import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TaskModalComponent } from './task-modal/task-modal.component';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { LocalStorageService } from './core/services/local-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskModalComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    CardModule,
    DynamicDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule
  ],
  providers: [DialogService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
