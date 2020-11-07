import { TestBed } from '@angular/core/testing';
import { contrattiReportMock } from '../mocks/data.mock';
import { AgentFacade } from './agent.facade';
import { AgentsModule } from './agents.module';

describe(AgentFacade.name, () => {
  let agentFacade: AgentFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AgentsModule],
      providers: [AgentFacade],
    });

    agentFacade = TestBed.inject(AgentFacade);
  });

  it('should be created', () => {
    expect(agentFacade).toBeTruthy();
  });

  it('#getContrattoReport(1) should return contratto 1', (done: DoneFn) => {
    agentFacade.getContrattoReport(1).subscribe((res) => {
      expect(res).toEqual(contrattiReportMock[0]);
      done();
    });
  });

  it('#getContrattoReport(2) should return contratto 2', (done: DoneFn) => {
    agentFacade.getContrattoReport(2).subscribe((res) => {
      expect(res).toEqual(contrattiReportMock[1]);
      done();
    });
  });

  it('#getContrattoReport(3) should return contratto 3', (done: DoneFn) => {
    agentFacade.getContrattoReport(3).subscribe((res) => {
      expect(res).toEqual(contrattiReportMock[2]);
      done();
    });
  });
});
