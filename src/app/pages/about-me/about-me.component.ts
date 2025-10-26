import { Component, signal } from '@angular/core';
import { TimelineItem } from '../../interfaces/time-line-item';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export default class AboutMeComponent {
  bio = `My interest in software development began in high school while I was still studying electronics. My first contact with programming was using Arduino with C++. My technical background has given me a strong foundation for solving complex problems and thinking logically. These are skills I apply constantly when building applications. I enjoy creating innovative solutions that combine hardware and software, and I’m always learning new technologies to stay up to date in the field.`;

  experiences: TimelineItem[] = [
    {
      year: 'Jul 2025 - Present',
      title: 'ARTECH - SAP Developer',
      description: 'Professional internship focused on the SAP area. Participation in real technological innovation projects. Development of soft skills in a work context.',
      type: 'experience'
    },
    {
      year: 'Jul 2022 - Nov 2022',
      title: 'EXO - Technical Support',
      description: 'Maintenance and repair of electronic devices such as computers and tablets. Diagnosis and resolution of technical problems.',
      type: 'experience'
    }
  ];

  studies: TimelineItem[] = [
    {
      year: '2023 - 2025',
      title: 'Universidad Tecnológica Nacional (UTN)',
      description: 'Associate Degree in Programming - Location: Buenos Aires, Avellaneda',
      type: 'education'
    },
    {
      year: '2017 – 2022',
      title: 'Instituto Industrial Luis A. Huergo',
      description: 'Electronics Technician - Location: Buenos Aires, San Telmo',
      type: 'education'
    },
    
  ];

  courses: TimelineItem[] = [ 
  {
    year: '2025',
    title: 'Docker: Practical Guide for Developers',
    description: 'A practical Docker course teaching containerization fundamentals: writing Dockerfiles, building images, volumes and networking, and using containers in local development and CI/CD pipelines. Taught by Fernando Herrera on Devtalles.',
    type: 'education'
  },
  {
    year: '2025',
    title: 'NestJS + Microservices: Scalable, Modular Applications',
    description: 'Advanced course on microservices with NestJS: design patterns for modular systems, inter-service communication, message brokers (e.g., RabbitMQ), and strategies for deploying and scaling microservice architectures. Taught by Fernando Herrera on Devtalles.',
    type: 'education'
  },
  {
    year: '2025',
    title: 'Nest: Scalable Backend Development with Node',
    description: 'Hands-on NestJS training focusing on modular architecture, TypeScript, dependency injection, building robust REST APIs, and integrating databases and authentication for scalable backends. Taught by Fernando Herrera on Devtalles.',
    type: 'education'
  },
  {
    year: '2024',
    title: 'Angular: From Zero to Expert',
    description: 'A practical course focused on Angular modules and architecture, covering component communication, services, routing, and how to structure scalable, modular Angular applications. Taught by Fernando Herrera on Devtalles.',
    type: 'education'
  },
  {
    year: '2024',
    title: 'Flutter (Mobile): From Zero to Expert',
    description: 'Comprehensive mobile development with Flutter: widget-based UI, state management, navigation, platform integration, and the process of building and publishing cross-platform iOS/Android apps. Taught by Fernando Herrera on Devtalles.',
    type: 'education'
  },
  {
    year: '2023',
    title: 'MongoDB: Learn NoSQL Database Fundamentals',
    description: 'MongoDB course covering document modeling, queries, aggregations, indexing and basic deployment with practical, hands-on labs. Taught by DataBoosters Academy on Udemy.',
    type: 'education'
  },
  {
    year: '2022',
    title: 'Node.js: From Zero to Expert',
    description: 'An end-to-end Node.js course that teaches asynchronous JavaScript, building RESTful APIs with Express, authentication, error handling, and integrating databases such as MongoDB. Taught by Fernando Herrera on Devtalles.',
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
