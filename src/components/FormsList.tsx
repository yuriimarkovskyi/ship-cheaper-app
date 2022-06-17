import React, { useState } from 'react';
import { useAppSelector } from 'hooks/useAppSelector';
import InvoiceAddressForm from './Forms/InvoiceAddressForm';
import BankDataForm from './Forms/BankDataForm';
import ContactForm from './Forms/ContactForm';

interface Props {
  close: () => void
}

function FormsList({ close }: Props) {
  const counter = useAppSelector((state) => state.counter.value);
  const [data, setData] = useState({});

  const activeForm = () => {
    switch (counter) {
      case 0: {
        return (
          <InvoiceAddressForm
            close={close}
            setData={setData}
          />
        );
      }
      case 1: {
        return (
          <BankDataForm
            close={close}
            data={data}
            setData={setData}
          />
        );
      }
      case 2: {
        return (
          <ContactForm
            close={close}
            data={data}
            setData={setData}
          />
        );
      }
      default: {
        return (
          <InvoiceAddressForm
            close={close}
            setData={setData}
          />
        );
      }
    }
  };

  return (
    <>
      {activeForm()}
    </>
  );
}

export default FormsList;
