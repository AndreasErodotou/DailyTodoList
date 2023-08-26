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
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { TaskManagmentComponent } from './task-managment/task-managment.component';
import { TableModule } from 'primeng/table';
import { TaskManagmentTablePendingComponent } from './task-managment/components/task-managment-table-pending/task-managment-table-pending.component';
import { TaskManagmentCardsPendingComponent } from './task-managment/components/task-managment-cards-pending/task-managment-cards-pending.component';
import { TaskManagmentTableFinishedComponent } from './task-managment/components/task-managment-table-finished/task-managment-table-finished.component';
import { TaskManagmentCardsFinishedComponent } from './task-managment/components/task-managment-cards-finished/task-managment-cards-finished.component';

@NgModule({
  declarations: [AppComponent, TaskModalComponent, TaskManagmentComponent, TaskManagmentTablePendingComponent, TaskManagmentCardsPendingComponent, TaskManagmentTableFinishedComponent, TaskManagmentCardsFinishedComponent],
  imports: [
    BrowserModule,
    ButtonModule,
    CardModule,
    DynamicDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    ToastModule,
    ConfirmPopupModule,
    TableModule,
  ],
  providers: [
    DialogService,
    LocalStorageService,
    MessageService,
    ConfirmationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
