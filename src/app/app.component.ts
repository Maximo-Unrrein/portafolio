import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';
import { ThreeBackgroundComponent } from "./component/three-background/three-background.component";
import { ThreeSceneService } from './services/three-service.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ThreeBackgroundComponent, RouterLinkActive, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  isLoading = true;
  progressValue = 0;
  
  // Estados de carga de recursos
  private threeJsLoaded = false;
  private fontsLoaded = false;

  constructor(private threeSceneService: ThreeSceneService) {}

  ngOnInit(): void {
    this.startLoading();
  }

  startLoading(): void {
    // Suscribirse a los eventos de carga de Three.js
    this.threeSceneService.loadingProgress$.subscribe(progress => {
      this.progressValue = Math.max(this.progressValue, progress * 0.8); // Three.js representa 80% del progreso
    });

    this.threeSceneService.loadingComplete$.subscribe(() => {
      this.threeJsLoaded = true;
      this.checkAllResourcesLoaded();
    });

    this.threeSceneService.loadingError$.subscribe(() => {
      // Continuar incluso si hay error en Three.js
      this.threeJsLoaded = true;
      this.checkAllResourcesLoaded();
    });

    // Verificar fuentes (10% del progreso)
    this.checkFontsLoaded();
    
    // Timeout de seguridad (10% del progreso)
    setTimeout(() => {
      this.progressValue = Math.max(this.progressValue, 90);
      this.checkAllResourcesLoaded();
    }, 3000);
  }

  checkFontsLoaded(): void {
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        this.fontsLoaded = true;
        this.progressValue = Math.max(this.progressValue, 90);
        this.checkAllResourcesLoaded();
      }).catch(() => {
        this.fontsLoaded = true;
        this.checkAllResourcesLoaded();
      });
    } else {
      // Fallback para navegadores que no soportan document.fonts
      setTimeout(() => {
        this.fontsLoaded = true;
        this.checkAllResourcesLoaded();
      }, 1000);
    }
  }

  checkAllResourcesLoaded(): void {
    if (this.threeJsLoaded && this.fontsLoaded) {
      this.progressValue = 100;
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    }
  }

}
