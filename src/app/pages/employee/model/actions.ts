import { createAction, props } from '@ngrx/store';
import { IEmpolyee } from 'src/app/pages/employee/model/empolyee';

export const loadEmployees = createAction(
    '[Employee List] Load Employees',
    props<{ page: number }>()
);

export const loadEmployeesSuccess = createAction(
    '[Employee List] Load Employees Success',
    props<{ employee: IEmpolyee[], total: number, page: number, per_page: number }>()
);

export const loadEmployeesFailure = createAction(
    '[Employee List] Load Employees Failure',
    props<{ error: any }>()
);
