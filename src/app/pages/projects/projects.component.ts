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
      title: 'FRENDO',
      languages: ['c#', '.net', 'python'],
      description: 'Social Network with reference on Facebook',
      date: new Date('2022-08-01'),
      images: [],
      demoUrl: 'https://www.youtube.com/',
      githubUrl: ''
    },
    {
      title: 'Ecommerce gamer',
      languages: ['c#', '.net', 'python'],
      description: '',
      date: new Date('2022-08-01'),
      images: [],
      demoUrl: 'https://www.youtube.com/',
      githubUrl: ''
    },
    {
      title: 'Sala De Juegos',
      languages: ['c#', '.net', 'python'],
      description: '',
      date: new Date('2022-08-01'),
      images: [],
      demoUrl: 'https://maximo-unrrein-tp-1-prog-4-2025-c1.vercel.app/home',
      githubUrl: 'https://github.com/Maximo-Unrrein/maximo-unrrein_TP1_PROG4-2025-C1'
    }
  ]

  openModal(project: Project){
    this.selectedProject = project;
    this.isModalOpen = true;
  }

  onCloseModal(){
    this.isModalOpen = false;
  }
}
