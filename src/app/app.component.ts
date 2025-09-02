import { Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';
import { ThreeBackgroundComponent } from "./component/three-background/three-background.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ThreeBackgroundComponent, RouterLinkActive, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'personal-web';

}
