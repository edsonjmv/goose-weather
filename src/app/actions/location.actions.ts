import { Action } from '@ngrx/store';

export enum LocationActionTypes {
  LoadLocations = '[Location] Load Locations',
  LocationsError = '[Location] Locations Errors',
}

export class LoadLocations implements Action {
  readonly type = LocationActionTypes.LoadLocations;
  payload: any;
}

export class LocationsError implements Action {
  readonly type = LocationActionTypes.LocationsError;
  payload: any;
}


export type LocationActions = LoadLocations | LocationsError;
