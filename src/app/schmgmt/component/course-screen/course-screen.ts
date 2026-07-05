import { Component, inject, OnInit, signal } from '@angular/core';
import { CourseService } from '../../../services/course-service';
import { CommonModule } from '@angular/common';
import { Course } from '../../../models/schmgmt.model';
import { CourseViewDialog } from "../course-view-dialog/course-view-dialog";

@Component({
  selector: 'app-course-screen',
  imports: [CommonModule, CourseViewDialog],
  templateUrl: './course-screen.html',
  styleUrl: './course-screen.css',
})
export class CourseScreen implements OnInit {
  private courseService = inject(CourseService);

  // Convert properties to reactive Signals
  courses = signal<Course[]>([]);
  singleCourse = signal<Course | null>(null);
  isCourseViewDialogOpen = signal<boolean>(false);

  ngOnInit(): void {
    this.loadGetAllCourses();
  }

  loadCourseById(courseId: string) {
    this.courseService.getCourseById(courseId).subscribe({
      next: (data) => {
        // Set values using signal write methods (.set)
        this.singleCourse.set(data as Course);
        this.isCourseViewDialogOpen.set(true);        
      },
      error: (err) => {
        console.error('Server request failed:', err);
      }
    });
  }

  loadGetAllCourses() {
    this.courseService.getAllCourses().subscribe({
      next: (data) => {
        this.courses.set(data as Course[]);
      },
      error: (err) => {
        console.error('Failed to grab courses:', err);
      }
    });
  }
  
  openCourseViewDialog(courseId: string) {
    this.isCourseViewDialogOpen.set(false);
    this.singleCourse.set(null);
    this.loadCourseById(courseId);
  }

  closeCourseViewDialog() {
    this.isCourseViewDialogOpen.set(false);
    this.singleCourse.set(null);
  }
}
