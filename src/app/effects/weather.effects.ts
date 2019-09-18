import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AppState } from '../reducers';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { LoadLocations, LocationActionTypes, LocationsError } from '../actions/location.actions';
import { LoadWeather } from '../actions/weather.actions';
import { WeatherService } from '../services/weather.service';

@Injectable()
export class WeatherEffects {

  @Effect()
  loadLocation$ = this.actions$
    .pipe(
      ofType<LoadLocations>(LocationActionTypes.LoadLocations),
      mergeMap((action) => this.weatherService.getWeather(action.payload.locationData)
        .pipe(
          map(weather => {
            return (new LoadWeather({ weatherData: weather }));
          }),
          catchError((errorMessage) => of(new LocationsError({ error: errorMessage })))
        ))
    );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private weatherService: WeatherService
  ) { }

}
