import { Component, OnInit } from '@angular/core';
import {CourseServcieClient} from "../services/course.servcie.client";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  title = 'Default title'
  courses = [
    {title: 'CS5200', id: 123},
    {title: 'CS5610', id: 234},
    {title: 'CS3200', id: 345},
    {title: 'CS4550', id: 456}
  ];

  constructor(private courseService: CourseServcieClient) { }

  ngOnInit() {
    this.courseService
      .findAllCourses()
      .then(courses => {
        this.courses = courses;
      });
  }

  addCourse(title) {
    const course = {
      id: (new Date()).getTime(),
      title: title
    }
    this.title = '';
    this.courses.push(course);
  }

  deleteCourse(deletedCourse) {
    this.courses = this.courses.filter(course => course.id !== deletedCourse.id)
    console.log(deletedCourse);
  }

}
