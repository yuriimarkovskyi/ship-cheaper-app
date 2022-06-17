interface ICounter {
  value: number
}

interface IInvoiceAddress {
  company: string;
  name: string;
  additional?: string;
  street?: string;
  postalCode?: number;
  country?: string;
}

interface IBankData {
  iban: number;
  bic: number;
  bankName: string;
}

interface IContact {
  fax?: string;
  email?: string;
  birthday?: number;
  homepage?: string;
}

interface ICustomer extends IInvoiceAddress, IBankData, IContact {
  id: number;
}

export type {
  ICounter, IInvoiceAddress, IBankData, IContact, ICustomer,
};
