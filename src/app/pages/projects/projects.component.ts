import { Component } from '@angular/core';
import { Project } from '../../interfaces/project.interface';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export default class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'FRENDO',
      lenguages: ['c#', '.net', 'python'],
      date: new Date('2022-08-01'),
      href: 'https://www.youtube.com/'
    },
    {
      title: 'Ecommerce gamer',
      lenguages: ['c#', '.net', 'python'],
      date: new Date('2022-08-01'),
      href: 'https://www.youtube.com/'
    },
    {
      title: 'Sala De Juegos',
      lenguages: ['c#', '.net', 'python'],
      date: new Date('2022-08-01'),
      href: 'https://www.youtube.com/'
    }
  ]
}
