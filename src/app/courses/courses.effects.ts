import {CourseActions} from './action-types';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, map} from 'rxjs/operators';
import {CoursesHttpService} from './services/courses-http.service';
import {Injectable} from '@angular/core';
import {allCoursesLoaded} from './course.actions';

@Injectable()
export class CoursesEffects {
  constructor(private action$: Actions,
              private coursesHttpService: CoursesHttpService) {
  }

  loadCourses$ = createEffect(
    () => this.action$.pipe(
      ofType(CourseActions.loadAllCourses),
      concatMap(() => this.coursesHttpService.findAllCourses()),
      map(courses => allCoursesLoaded({courses}))
    )
  );

  updateCourse$ = createEffect(
    () => this.action$.pipe(
      ofType(CourseActions.courseUpdated),
      concatMap(action => this.coursesHttpService.saveCourse(action.update.id, action.update.changes))
    ),
    {dispatch: false}
  );
}
