import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { EmployeesService } from 'src/app/core/services/employees.service';
import * as EmployeeActions from './actions';
import { IEmployeeState } from './reducer';

@Injectable()
export class EmployeeEffects {
    constructor(private actions$: Actions, private employeeService: EmployeesService, private store: Store<{ employee: IEmployeeState }>) { }

    loadEmployees$ = createEffect(() =>
        this.actions$.pipe(
            ofType(EmployeeActions.loadEmployees),
            switchMap(({ page }) =>
                this.store.select(state => state.employee.cache[page]).pipe(
                    switchMap(cachedEmployees => {
                        if (cachedEmployees) {
                            return of();
                        } else {
                            return this.employeeService.getAllEmployee(page).pipe(
                                map(response => EmployeeActions.loadEmployeesSuccess({
                                    ...response,
                                    employee: response['data']
                                })),
                                catchError(error => of(EmployeeActions.loadEmployeesFailure({ error })))
                            );
                        }
                    })
                )
            )
        )
    );
    

}
