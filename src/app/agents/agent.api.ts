import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, delay, map, tap } from 'rxjs/operators';

import {
  Anagrafica,
  AnagraficaMap,
  Contratto,
  DefaultAnagrafica,
} from '../models/contratto';
import { anagraficheMock, contrattiMock } from '../mocks/data.mock';

@Injectable()
export class AgentApi {
  fetchContratto(contrattoId: number): Observable<Contratto> {
    return of(null).pipe(
      delay(1000),
      map(() => {
        const contratto = contrattiMock.find((c) => c.id === contrattoId);
        if (!contratto) {
          throw new Error(`Contratto con ID ${contrattoId} non trovato`);
        }

        return contratto;
      })
    );
  }

  fetchAnagrafica(ndgAnagrafica: string): Observable<Anagrafica> {
    return of(null).pipe(
      delay(2000),
      map(() => {
        const anagrafica = anagraficheMock.find(
          (a) => a.ndgAnagrafica === ndgAnagrafica
        );
        if (!anagrafica) {
          throw new Error(`Anagrafica con ndg ${ndgAnagrafica} non trovata`);
        }

        return anagrafica;
      })
    );
  }

  fetchAnagrafiche(ndgAnagrafiche: string[]): Observable<AnagraficaMap> {
    const anagraficheCalls$ = ndgAnagrafiche.map((ndgAnagrafica) => {
      return this.fetchAnagrafica(ndgAnagrafica).pipe(
        catchError((error) => {
          console.error(error);
          return of({ ...DefaultAnagrafica, ndgAnagrafica });
        })
      );
    });

    return forkJoin(anagraficheCalls$).pipe(
      map((anagrafiche: Anagrafica[]) => {
        return anagrafiche.reduce((acc, anagrafica) => {
          acc[anagrafica.ndgAnagrafica] = anagrafica;
          return acc;
        }, {});
      }),
      tap((anagraficaMap) => console.log('[fetchAnagrafiche]', anagraficaMap))
    );
  }
}
