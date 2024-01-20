import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { CourseService } from '../../services/course.service';
import { SweetalertService } from '../../../shared/services/sweetalert/sweetalert.service';
import { CourseCard, CourseCards } from '../../../models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit{

  courseCards: CourseCards = [];
  length!: number;
  filterObj = {
    "page": "1",
    "limit": "5"
  }

  constructor(private courseService: CourseService,
    private sweetAlertService: SweetalertService){
  }

  ngOnInit(): void {
    this.getCoursesCards();
  }

  paginate(e: any){
    this.filterObj.page = e.pageIndex+1;
    this.filterObj.limit = e.pageSize;
    this.getCoursesCards();
  }


  getCoursesCards(){
    
    this.courseService.getCourses(this.filterObj).subscribe({
      next:(res) => {
        this.length = res.total;
        this.courseCards = res.rows;
      },
      error: (error) => {
        this.sweetAlertService.errorAlert(error);
      }
    });
  }
}
