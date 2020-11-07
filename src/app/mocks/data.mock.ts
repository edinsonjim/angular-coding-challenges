import { Contratto, Cliente, Anagrafica } from '../models/contratto';
import { ContrattoReport } from '../models/contratto-report';

export const anagraficheMock: Anagrafica[] = [
  {
    ndgAnagrafica: '00004567',
    ragioneSociale: 'Veronica Leon',
    pIva: '09526610960',
    naturaGiuridica: 'SRL',
    ateco: '10.0',
    rae: '16.2',
    sae: '001',
  },
  {
    ndgAnagrafica: '00005567',
    ragioneSociale: 'Maria Leon',
    pIva: '19526610960',
    naturaGiuridica: 'SRL',
    ateco: '11.0',
    rae: '20.2',
    sae: '002',
  },
  {
    ndgAnagrafica: '00006667',
    ragioneSociale: 'Jessica Rojas',
    pIva: '09526610999',
    naturaGiuridica: 'SRL',
    ateco: '99.0',
    rae: '99.2',
    sae: '003',
  },
];

export const clientiMock: Cliente[] = [
  {
    id: 1,
    nome: 'Veronia',
    cognome: 'Leon',
    ndgAnagrafica: '00004567',
  },
  {
    id: 2,
    nome: 'Maria',
    cognome: 'Leon',
    ndgAnagrafica: '00005567',
  },
  {
    id: 3,
    nome: 'Jessica',
    cognome: 'Rojas',
    ndgAnagrafica: '00006667',
  },
];

export const contrattiMock: Contratto[] = [
  {
    id: 1,
    nome: 'Contratto 1',
    cliente: clientiMock[0],
    terzi: [],
  },
  {
    id: 2,
    nome: 'Contratto 2',
    cliente: clientiMock[1],
    terzi: [
      {
        id: 1,
        ndgAnagrafica: '00004567',
      },
      {
        id: 2,
        ndgAnagrafica: '00005567',
      },
    ],
  },
  {
    id: 3,
    nome: 'Contratto 3',
    cliente: clientiMock[1],
    terzi: [
      {
        id: 1,
        ndgAnagrafica: '000045679',
      },
      {
        id: 2,
        ndgAnagrafica: '00006667',
      },
    ],
  },
];

export const contrattiReportMock: ContrattoReport[] = [
  {
    id: 1,
    nome: 'Contratto 1',
    cliente: {
      id: 1,
      nome: 'Veronia',
      cognome: 'Leon',
      ndgAnagrafica: '00004567',
      anagrafica: {
        ndgAnagrafica: '00004567',
        ragioneSociale: 'Veronica Leon',
        pIva: '09526610960',
        naturaGiuridica: 'SRL',
        ateco: '10.0',
        rae: '16.2',
        sae: '001',
      },
    },
    terzi: [],
  },
  {
    id: 2,
    nome: 'Contratto 2',
    cliente: {
      id: 2,
      nome: 'Maria',
      cognome: 'Leon',
      ndgAnagrafica: '00005567',
      anagrafica: {
        ndgAnagrafica: '00005567',
        ragioneSociale: 'Maria Leon',
        pIva: '19526610960',
        naturaGiuridica: 'SRL',
        ateco: '11.0',
        rae: '20.2',
        sae: '002',
      },
    },
    terzi: [
      {
        id: 1,
        ndgAnagrafica: '00004567',
        anagrafica: {
          ndgAnagrafica: '00004567',
          ragioneSociale: 'Veronica Leon',
          pIva: '09526610960',
          naturaGiuridica: 'SRL',
          ateco: '10.0',
          rae: '16.2',
          sae: '001',
        },
      },
      {
        id: 2,
        ndgAnagrafica: '00005567',
        anagrafica: {
          ndgAnagrafica: '00005567',
          ragioneSociale: 'Maria Leon',
          pIva: '19526610960',
          naturaGiuridica: 'SRL',
          ateco: '11.0',
          rae: '20.2',
          sae: '002',
        },
      },
    ],
  },
  {
    id: 3,
    nome: 'Contratto 3',
    cliente: {
      id: 2,
      nome: 'Maria',
      cognome: 'Leon',
      ndgAnagrafica: '00005567',
      anagrafica: {
        ndgAnagrafica: '00005567',
        ragioneSociale: 'Maria Leon',
        pIva: '19526610960',
        naturaGiuridica: 'SRL',
        ateco: '11.0',
        rae: '20.2',
        sae: '002',
      },
    },
    terzi: [
      {
        id: 1,
        ndgAnagrafica: '000045679',
        anagrafica: {
          ndgAnagrafica: '000045679',
          ragioneSociale: null,
          pIva: null,
          naturaGiuridica: null,
          ateco: null,
          rae: null,
          sae: null,
        },
      },
      {
        id: 2,
        ndgAnagrafica: '00006667',
        anagrafica: {
          ndgAnagrafica: '00006667',
          ragioneSociale: 'Jessica Rojas',
          pIva: '09526610999',
          naturaGiuridica: 'SRL',
          ateco: '99.0',
          rae: '99.2',
          sae: '003',
        },
      },
    ],
  },
];
