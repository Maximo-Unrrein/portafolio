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
  close = output();
  
  // Controlar el estado de la animación
  isVisible: boolean = false;
  isAnimating: boolean = false;


  // Variables para el carrusel
  currentImageIndex: number = 0;
  isImageModalOpen: boolean = false;
  currentEnlargedImage: string = '';
  

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isOpen']) {
      if (this.isOpen()) {
        this.openModal();
      } else {
        this.closeModal();
      }
    }
  }

  openModal() {
    this.isVisible = true;
        
    // Pequeño retraso para permitir que Angular renderice antes de iniciar la animación
    setTimeout(() => {
      this.isAnimating = true;
    }, 10);
  }

  closeModal() {
    this.isAnimating = false;
    
    // Esperar a que termine la animación antes de ocultar completamente
    setTimeout(() => {
      this.isVisible = false;
      this.close.emit();
    }, 300); // Debe coincidir con la duración de la animación CSS
  }

  onOverlayClick(event: Event) {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }


  // Métodos para el carrusel
  nextImage() {
    if (this.project()?.images && this.project()!.images.length > 0) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.project()!.images.length;
    }
  }

  prevImage() {
    if (this.project()?.images && this.project()!.images.length > 0) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.project()!.images.length) % this.project()!.images.length;
    }
  }

  goToImage(index: number) {
    this.currentImageIndex = index;
  }

  openImageModal(imageUrl: string) {
    this.currentEnlargedImage = imageUrl;
    this.isImageModalOpen = true;
  }

  closeImageModal() {
    this.isImageModalOpen = false;
  }
}
