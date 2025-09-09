import { Component, EventEmitter, OnChanges, Output, SimpleChanges, input, output } from '@angular/core';
import { Project } from '../../../interfaces/project.interface';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnChanges {
  project = input<Project>();
  isOpen = input<boolean>(false);
  closeModal = output();
  
  onClose(){
    this.closeModal.emit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
}
