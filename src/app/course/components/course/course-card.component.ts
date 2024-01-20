import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input() title! : string;
  @Input() description!: string;
  @Input() teacher!: string;
  @Input() price!: number;
  @Input() rating!: string;
  @Input() img!: string;
}
