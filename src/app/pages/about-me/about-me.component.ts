import { Component, signal } from '@angular/core';
import { TimelineItem } from '../../interfaces/time-line-item';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export default class AboutMeComponent {
  bio = `Soy Técnico Electrónico con una gran pasión por la programación y el desarrollo de software. 
  Mi background técnico me ha dado una sólida base para resolver problemas complejos y pensar de manera lógica, 
  habilidades que aplico constantemente en el desarrollo de aplicaciones. 
  Disfruto creando soluciones innovadoras que combinen hardware y software, 
  y estoy constantemente aprendiendo nuevas tecnologías para mantenerme actualizado en el campo del desarrollo.`;

  experiences: TimelineItem[] = [
    {
      year: '2022 - Presente',
      title: 'Desarrollador FullStack Freelance',
      description: 'Desarrollo de aplicaciones web con Angular, Node.js y MongoDB para diversos clientes.',
      type: 'experience'
    },
    {
      year: '2020 - 2022',
      title: 'Técnico Electrónico Senior',
      description: 'Reparación y mantenimiento de equipos electrónicos, con enfoque en sistemas embebidos.',
      type: 'experience'
    },
    {
      year: '2018 - 2020',
      title: 'Practicante de Desarrollo Embedded',
      description: 'Desarrollo de firmware para dispositivos IoT en lenguaje C y Python.',
      type: 'experience'
    }
  ];

  studies: TimelineItem[] = [
    {
      year: '2021 - 2023',
      title: 'Certificación en Desarrollo FullStack',
      description: 'Plataforma: Udemy/Coursera. Tecnologías: Angular, Node.js, MongoDB',
      type: 'education'
    },
    {
      year: '2019',
      title: 'Curso Avanzado de JavaScript',
      description: 'Plataforma: Platzi. Especialización en frameworks modernos',
      type: 'education'
    },
    {
      year: '2015 - 2018',
      title: 'Técnico en Electrónica',
      description: 'Instituto Técnico Industrial. Especialización en sistemas digitales',
      type: 'education'
    }
  ];

  courses: TimelineItem[] = [ {
    year: '2023',
    title: 'Angular Mastery - Advanced Concepts',
    description: 'Dominio de componentes avanzados, servicios, RxJS y estado global con NgRx',
    type: 'education'
  },
  {
    year: '2023',
    title: 'Node.js & Express Professional',
    description: 'Desarrollo de APIs RESTful, autenticación JWT y despliegue en producción',
    type: 'education'
  },
  {
    year: '2022',
    title: 'MongoDB Database Developer',
    description: 'Diseño de esquemas, agregaciones avanzadas y optimización de consultas',
    type: 'education'
  },
  {
    year: '2022',
    title: 'TypeScript Pro Foundation',
    description: 'Tipos avanzados, genéricos, decoradores y patrones de diseño TypeScript',
    type: 'education'
  },
  {
    year: '2022',
    title: 'AWS Cloud Practitioner',
    description: 'Fundamentos de cloud computing, EC2, S3, Lambda y servicios AWS esenciales',
    type: 'education'
  },
  {
    year: '2021',
    title: 'React & Redux Complete Guide',
    description: 'Hooks avanzados, context API, Redux Toolkit y testing con Jest',
    type: 'education'
  }
]


  buttonSelected = 'Courses';




  changeList(topic: string): void{
    this.buttonSelected = topic;
  }

  get allItems(): TimelineItem[] {
    return [...this.studies, ...this.experiences]
      .sort((a, b) => {
        // Ordenar por año de forma descendente
        return b.year.localeCompare(a.year);
      });
  }
}
