import { Action } from '@ngrx/store';

export enum WeatherActionTypes {
  LoadWeathers = '[Weather] Load Weathers',
}

export class LoadWeathers implements Action {
  readonly type = WeatherActionTypes.LoadWeathers;
}


export type WeatherActions = LoadWeathers;
