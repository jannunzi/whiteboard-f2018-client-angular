
import {Injectable} from "@angular/core";

@Injectable()
export class CourseServcieClient {
  findAllCourses() {
    return fetch('http://localhost:8080/api/course', {
      credentials: 'include'
    })
      .then(response => {
        return response.json();
      });
  }
  findCourseById(courseId) {

  }
  createCourse(course) {}
  deleteCourse(courseId){}
}
