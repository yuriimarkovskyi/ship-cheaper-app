import React from 'react';
import { useAppSelector } from 'hooks/useAppSelector';
import customersTableHeader from 'constants/customersTableHeader';
import CustomersTableRow from './CustomersTableRow';

function CustomersTable() {
  const customers = useAppSelector((state) => state.customers);

  return (
    <table className="customers-table">
      <thead>
        <tr>
          {customersTableHeader.map((val) => (
            <th key={val}>
              {val}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <CustomersTableRow key={customer.id} customer={customer} />
        ))}
      </tbody>
    </table>
  );
}

export default CustomersTable;
