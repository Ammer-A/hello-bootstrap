import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroComponent } from "./intro/intro.component";
import { CoursesComponent } from "./courses/courses.component";
import { FooterComponent } from "./footer/footer.component";
import { SwitchDemoComponent } from "./switch-demo/switch-demo.component";
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, IntroComponent, CoursesComponent, FooterComponent, SwitchDemoComponent,CommonModule,]
})
export class AppComponent {
  title = 'hello-bootstrap';
}
