import { Component } from '@angular/core';
import { Project } from '../../interfaces/project.interface';
import { ModalComponent } from "../../shared/components/modal/modal.component";

@Component({
  selector: 'app-projects',
  imports: [ModalComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export default class ProjectsComponent {
  selectedProject: Project | null = null;
  isModalOpen: boolean = false;


  projects: Project[] = [
    {
      title: 'Sala De Juegos',
      languages: ['Angular', 'Typescript', 'Supabase', 'SQL', 'HTML', 'CSS'],
      description: 'A Page that has mini games inside it',
      date: new Date('2024-08-01'),
      images: [
        './assets/images/projects/room-game/image_1.png',
        './assets/images/projects/room-game/image_2.png',
        './assets/images/projects/room-game/image_3.png',
        './assets/images/projects/room-game/image_4.png',
        './assets/images/projects/room-game/image_5.png',
        './assets/images/projects/room-game/image_6.png',
        './assets/images/projects/room-game/image_7.png',
        './assets/images/projects/room-game/image_8.png',
        './assets/images/projects/room-game/image_9.png',
        './assets/images/projects/room-game/image_10.png'   
      ],
      demoUrl: 'https://maximo-unrrein-tp-1-prog-4-2025-c1.vercel.app/home',
      githubUrl: 'https://github.com/Maximo-Unrrein/maximo-unrrein_TP1_PROG4-2025-C1'
    },
    {
      title: 'Gifs-App',
      languages: ['Angular', 'Typescript', 'HTML', 'CSS'],
      description: 'A Page where you can see the trending gifs and others one',
      date: new Date('2024-08-01'),
      images: [
        './assets/images/projects/gifs-app/image_1.png',
        './assets/images/projects/gifs-app/image_2.png' 
      ],
      demoUrl: 'https://gif-app-98wp-b16uqbu4y-maximos-projects-937c32cc.vercel.app/dashboard/trending',
      githubUrl: ''
    },
    {
      title: 'Turnero',
      languages: ['C#', '.Net', 'SQL'],
      description: 'Software that makes it easier to schedule appointments with doctors',
      date: new Date('2022-08-01'),
      images: [
        './assets/images/projects/turnero/image_1.png',
        './assets/images/projects/turnero/image_2.png',
        './assets/images/projects/turnero/image_3.png',
        './assets/images/projects/turnero/image_4.png',
        './assets/images/projects/turnero/image_5.png',
        './assets/images/projects/turnero/image_6.png',
        './assets/images/projects/turnero/image_7.png',
      ],
      demoUrl: '',
      githubUrl: 'https://github.com/Maximo-Unrrein/Unrrein.Maximo.PrimerParcial/tree/segundo_parcial'
    },
    {
      title: 'Demon Hunter',
      languages: ['Python', 'Pygame'],
      description: 'A platform game made with the librarie Pygame',
      date: new Date('2022-08-01'),
      images: [
        './assets/images/projects/demon-hunter/image_1.png',
        './assets/images/projects/demon-hunter/image_2.png',
        './assets/images/projects/demon-hunter/image_3.png',
        './assets/images/projects/demon-hunter/image_4.png',
        './assets/images/projects/demon-hunter/image_5.png',
        './assets/images/projects/demon-hunter/image_6.png',
        './assets/images/projects/demon-hunter/image_7.png',
      ],
      demoUrl: '',
      githubUrl: 'https://github.com/Maximo-Unrrein/juego_pygame_definitivo'
    },
    
    
  ]

  openModal(project: Project){
    this.selectedProject = project;
    this.isModalOpen = true;
  }

  onCloseModal(){
    this.isModalOpen = false;
  }
}
