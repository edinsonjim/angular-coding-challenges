import { Injectable } from '@angular/core';
import { AnagraficaMap, Contratto } from '../models/contratto';
import { ContrattoReport } from '../models/contratto-report';
import { AgentApi } from './agent.api';

@Injectable()
export class AgentFacade {
    constructor(private agentApi: AgentApi) { }

    async getContrattoReport(contrattoId: number): Promise<ContrattoReport> {
        const contratto: Contratto = await this.agentApi.fetchContratto(contrattoId).toPromise();

        const ndgTerzi = contratto.terzi.map((t) => t.ndgAnagrafica);
        const ndgClienti = [contratto.cliente.ndgAnagrafica];
        const ndgToFetch = [...ndgClienti, ...ndgTerzi];

        const anagraficaMap: AnagraficaMap = await this.agentApi.fetchAnagrafiche(ndgToFetch).toPromise();
        return this.composeReport(contratto, anagraficaMap);
    }

    private composeReport(contratto: Contratto, anagraficaMap: AnagraficaMap): ContrattoReport {
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
    }
}
