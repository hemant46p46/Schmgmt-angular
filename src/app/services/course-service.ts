import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { SchMgmtEnums } from '../enums/app.schmgmt.enums';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private http = inject(HttpClient);

  getAllCourses() {
    return this.http.get(`${SchMgmtEnums.BASE_URL}/${SchMgmtEnums.API_PATH}/${SchMgmtEnums.VERSION}/${SchMgmtEnums.COURSES_ENDPOINT}`);
  }

  getCourseById(courseId: string) {
    return this.http.get(`${SchMgmtEnums.BASE_URL}/${SchMgmtEnums.API_PATH}/${SchMgmtEnums.VERSION}/${SchMgmtEnums.COURSE_BY_ID_ENDPOINT}/${courseId}`);
  }

  updateCourse(courseId: string, courseData: any) {
    return this.http.put(`${SchMgmtEnums.BASE_URL}/${SchMgmtEnums.API_PATH}/${SchMgmtEnums.VERSION}/${SchMgmtEnums.UPDATE_COURSE_ENDPOINT}/${courseId}`, courseData);
  }

  deleteCourse(courseId: string) {
    return this.http.delete(`${SchMgmtEnums.BASE_URL}/${SchMgmtEnums.API_PATH}/${SchMgmtEnums.VERSION}/${SchMgmtEnums.DELETE_COURSE_ENDPOINT}/${courseId}`);
  }
}
