import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FilterComponent } from './components/filter/filter.component';
import { SearchComponent } from './components/search/search.component';
import { StarComponent } from './components/star/star.component';
import { MatIconModule } from '@angular/material/icon';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseCardComponent } from './components/course/course-card.component';
import { CourseComponent } from './pages/course/course.component';
import { MatInputModule } from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PaginatorComponent } from './components/paginator/paginator.component';
import {JsonPipe} from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';



@NgModule({
  declarations: [
    FilterComponent,
    SearchComponent,
    CourseCardComponent,
    StarComponent,
    CourseCardComponent,
    CourseComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    NgxStarRatingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    JsonPipe,
    FormsModule
  ]
})
export class CourseModule { }
