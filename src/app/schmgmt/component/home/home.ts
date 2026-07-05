import { Component, inject } from '@angular/core';
import { CourseScreen } from "../course-screen/course-screen";

@Component({
  selector: 'app-home',
  imports: [CourseScreen],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  ngOnInit(): void {

  }

}
