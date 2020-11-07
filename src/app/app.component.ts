import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AgentFacade } from './agents/agent.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-coding-challenges';

  subscription = new Subscription();

  constructor(private agentFacade: AgentFacade) {}

  ngOnInit(): void {
    const resolveContratto$ = this.agentFacade.getContrattoReport(2);

    this.subscription.add(resolveContratto$.subscribe());
  }
}
