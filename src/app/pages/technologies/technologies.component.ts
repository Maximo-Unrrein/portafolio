import { Component } from '@angular/core';
import { LanguagesFrameworksItems } from '../../interfaces/languages-frameworks';

@Component({
  selector: 'app-technologies',
  imports: [],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export default class TechnologiesComponent {

  languages: LanguagesFrameworksItems[] = [
    {
      name: 'C#',
      icon: './assets/icons/c-sharp.png'
    },
    {
      name: 'Java',
      icon: './assets/icons/java.png'
    },
    {
      name: 'Dart',
      icon: './assets/icons/dart.png'
    },
    {
      name: 'Javascript',
      icon: './assets/icons/javascript.png'
    },
    {
      name: 'Typescript',
      icon: './assets/icons/typescript.png'
    },
    {
      name: 'Python',
      icon: './assets/icons/python.png'
    },
    {
      name: 'Sql',
      icon: './assets/icons/sql.png'
    }
  ];

  frameworks: LanguagesFrameworksItems[] = [
    {
      name: 'Angular',
      icon: './assets/icons/angular.png'
    },
    {
      name: 'Flutter',
      icon: './assets/icons/flutter.png'
    },
    {
      name: 'Sap',
      icon: './assets/icons/sap.png'
    },
    {
      name: 'Node.js',
      icon: './assets/icons/nodejs.png'
    },
    {
      name: '.Net',
      icon: './assets/icons/net.png'
    },
    {
      name: 'Nest',
      icon: './assets/icons/nestjs.png'
    },
    {
      name: 'Express.js',
      icon: './assets/icons/express-js.png'
    }
  ];

  tools: LanguagesFrameworksItems[] = [
    {
      name: 'Git',
      icon: './assets/icons/git.png'
    },
    {
      name: 'GitHub',
      icon: './assets/icons/github.png'
    },
    {
      name: 'MySql',
      icon: './assets/icons/mysql.png'
    },
    {
      name: 'MongoDB',
      icon: './assets/icons/mongo.png'
    },
    {
      name: 'Visual Studio Code',
      icon: './assets/icons/visual-studio-code.png'
    }
  ]

  
}
