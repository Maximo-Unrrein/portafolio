// three-background.component.ts
import { Component, ElementRef, AfterViewInit, OnDestroy, ViewChild, Injectable, inject } from '@angular/core';
import { ThreeSceneService } from '../../services/three-service.service';

@Component({
  selector: 'app-three-background',
  template: '<canvas #threeCanvas></canvas>',
  styles: [`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1; /* Para que esté detrás del contenido */
    }
    canvas {
      display: block;
    }
  `]
})
export class ThreeBackgroundComponent implements AfterViewInit, OnDestroy {
  @ViewChild('threeCanvas', { static: true }) canvasRef!: ElementRef;

  constructor(private threeSceneService: ThreeSceneService) { }

  ngAfterViewInit(): void {
    this.threeSceneService.initializeScene(this.canvasRef);
  }

  ngOnDestroy(): void {
    this.threeSceneService.cleanup();
  }
}