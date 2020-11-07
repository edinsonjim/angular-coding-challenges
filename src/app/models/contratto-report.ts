import { Anagrafica } from "./contratto";

export interface ContrattoReport {
  id: number;
  nome: string;
  cliente: {
    id: number;
    nome: string;
    cognome: string;
    ndgAnagrafica: string;
    anagrafica: Anagrafica;
  };
  terzi: {
    id: number;
    ndgAnagrafica: string;
    anagrafica: Anagrafica;
  }[];
}
