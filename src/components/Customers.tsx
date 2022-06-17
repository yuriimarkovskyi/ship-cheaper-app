import React, { useState } from 'react';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { reset } from 'store/counterSlice';
import CustomersTable from './CustomersTable';
import Button from './UI/Button';
import ModalForms from './ModalForms';

function Customers() {
  const dispatch = useAppDispatch();
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => setIsVisible(true);
  const closeModal = () => {
    setIsVisible(false);
    dispatch(reset());
  };

  return (
    <div className="customers">
      <Button
        className="customers__add-button secondary"
        onClick={openModal}
      >
        Add
      </Button>
      <ModalForms
        isVisible={isVisible}
        close={closeModal}
      />
      <CustomersTable />
    </div>

  );
}

export default Customers;
