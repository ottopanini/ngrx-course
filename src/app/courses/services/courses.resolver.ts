import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CourseEntityService} from './course-entity.service';
import {filter, first, tap} from 'rxjs/operators';

@Injectable()
export class CoursesResolver implements Resolve<boolean> {
  constructor(private coursesService: CourseEntityService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.coursesService.loaded$.pipe(
      tap((loaded: boolean) => {
        if (!loaded) {
          this.coursesService.getAll();
        }
      }),
      filter(loaded => !!loaded),
      first()
    );
    // return this.coursesService.getAll().pipe(
    //   map(courses => !!courses)
    // );
  }
}
