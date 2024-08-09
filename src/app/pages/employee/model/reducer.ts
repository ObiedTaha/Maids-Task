import { createReducer, on } from '@ngrx/store';
import * as EmployeeActions from './actions';
import { IEmpolyee } from 'src/app/pages/employee/model/empolyee';

export interface IEmployeeState {
    employee: IEmpolyee[];
    per_page: number;
    total: number;
    page: number
    error: any;
    cache: {
        [page: number]: {
            employee: IEmpolyee[];
            per_page: number;
            total: number;
        }
    };

}

export const initialState: IEmployeeState = {
    employee: [],
    per_page: 6,
    page: 1,
    total: 0,
    error: null,
    cache: {}
};

export const employeeReducer = createReducer(
    initialState,
    on(EmployeeActions.loadEmployees, (prevState, { page }) => {
        const cachedEmployees = prevState.cache[page];
        return cachedEmployees ?
            ({ ...prevState, ...cachedEmployees,page:page }) :
            ({ ...prevState, error: null })
    }),

    on(EmployeeActions.loadEmployeesSuccess, (prevState, state) => ({
        ...prevState,
        ...state,
        cache: {
            ...prevState.cache,
            [state.page]: {
                employee: state.employee,
                per_page: state.per_page,
                total: state.total
            }
        }
    })),
    on(EmployeeActions.loadEmployeesFailure, (prevState, { error }) => ({
        ...prevState,
        error
    }))
);
