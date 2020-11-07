import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { exhaustMap, map, tap } from 'rxjs/operators';
import { AnagraficaMap, Contratto } from '../models/contratto';
import { ContrattoReport } from '../models/contratto-report';
import { AgentApi } from './agent.api';

@Injectable()
export class AgentFacade {
  constructor(private agentApi: AgentApi) {}

  getContrattoReport(contrattoId: number): Observable<ContrattoReport> {
    return this.agentApi.fetchContratto(contrattoId).pipe(
      exhaustMap((contratto: Contratto) => {
        const ndgTerzi = contratto.terzi.map((t) => t.ndgAnagrafica);
        const ndgClienti = [contratto.cliente.ndgAnagrafica];
        const ndgToFetch = [...ndgClienti, ...ndgTerzi];

        return this.agentApi.fetchAnagrafiche(ndgToFetch).pipe(
          map((anagraficaMap: AnagraficaMap) => {
            return {
              contratto,
              anagraficaMap,
            };
          })
        );
      }),
      map(({ contratto, anagraficaMap }) => {
        const contrattoReport: ContrattoReport = {
          id: contratto.id,
          nome: contratto.nome,
          cliente: {
            id: contratto.cliente.id,
            nome: contratto.cliente.nome,
            cognome: contratto.cliente.cognome,
            ndgAnagrafica: contratto.cliente.ndgAnagrafica,
            anagrafica: anagraficaMap[contratto.cliente.ndgAnagrafica],
          },
          terzi: contratto.terzi.map((terzo) => {
            return {
              ...terzo,
              anagrafica: anagraficaMap[terzo.ndgAnagrafica],
            };
          }),
        };
        return contrattoReport;
      }),
      tap((contrattoReport: ContrattoReport) =>
        console.log('[contrattoReport]', contrattoReport)
      )
    );
  }
}
