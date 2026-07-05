import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../../models/schmgmt.model';

@Component({
  selector: 'app-course-view-dialog',
  imports: [],
  templateUrl: './course-view-dialog.html',
  styleUrl: './course-view-dialog.css',
})
export class CourseViewDialog {
  @Input() course: Course | null = null;
  @Input() isOpen: boolean = false;
  @Input() courseId: string = '';
  @Output() close = new EventEmitter<void>();

  closeDialog() {
    this.close.emit();
  }
}
