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
  showModal: boolean = false

  projects: Project[] = [
    {
      title: 'FRENDO',
      languages: ['c#', '.net', 'python'],
      description: '',
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
      demoUrl: 'https://www.youtube.com/',
      githubUrl: ''
    }
  ]

  openModal(project: Project){
    this.selectedProject = project;
    this.showModal = true;
  }

  onCloseModal(){
    this.showModal = false;
    this.selectedProject = null;
  }
}
