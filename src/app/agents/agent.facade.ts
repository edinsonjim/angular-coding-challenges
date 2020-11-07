import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContrattoReport } from '../models/contratto-report';
import { AgentApi } from './agent.api';

@Injectable()
export class AgentFacade {
  constructor(private agentApi: AgentApi) {}

  getContrattoReport(contrattoId: number): Observable<ContrattoReport> {
    return of(null);
  }
}
