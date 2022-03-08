import {Course} from '../model/course';

export interface CoursesState {
  entities: { [key: number]: Course };
  ids: number[];
}
