export interface Anagrafica {
  ndgAnagrafica: string;
  ragioneSociale: string;
  pIva: string;
  naturaGiuridica: string;
  ateco: string;
  sae: string;
  rae: string;
}

export const DefaultAnagrafica: Anagrafica = {
  ndgAnagrafica: null,
  ragioneSociale: null,
  pIva: null,
  naturaGiuridica: null,
  ateco: null,
  sae: null,
  rae: null,
};

export interface AnagraficaMap {
  [key: string]: Anagrafica;
}

export interface Terzo {
  id: number;
  ndgAnagrafica: string;
}
export interface Cliente {
  id: number;
  nome: string;
  cognome: string;
  ndgAnagrafica: string;
}
export interface Contratto {
  id: number;
  nome: string;
  cliente: Cliente;
  terzi: Terzo[];
}
