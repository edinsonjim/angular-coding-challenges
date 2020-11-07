import { NgModule } from "@angular/core";
import { AgentApi } from "./agent.api";
import { AgentFacade } from "./agent.facade";

@NgModule({
  providers: [AgentApi, AgentFacade]
})
export class AgentsModule {}
