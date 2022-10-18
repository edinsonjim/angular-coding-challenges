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

    it('#getContrattoReport(1) should return contratto 1', async (done: DoneFn) => {
        const res = await agentFacade.getContrattoReport(1);
        expect(res).toEqual(contrattiReportMock[0]);
        done();
    });

    it('#getContrattoReport(2) should return contratto 2', async (done: DoneFn) => {
        const res = await agentFacade.getContrattoReport(2);
        expect(res).toEqual(contrattiReportMock[1]);
        done();
    });

    it('#getContrattoReport(3) should return contratto 3', async (done: DoneFn) => {
        const res = await agentFacade.getContrattoReport(3);
        expect(res).toEqual(contrattiReportMock[2]);
        done();
    });
});
