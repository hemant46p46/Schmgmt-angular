import { Component, inject } from '@angular/core';
import { CourseService } from '../services/course-service';
import { Home } from "./component/home/home";

@Component({
  selector: 'app-schmgmt',
  imports: [Home],
  templateUrl: './schmgmt.html',
  styleUrl: './schmgmt.css',
})
export class Schmgmt {

}
