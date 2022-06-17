import React from 'react';
import { ICustomer } from 'types';
import deleteIcon from 'images/icons/delete-icon.svg';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { deleteCustomer } from 'store/customersSlice';

interface Props {
  customer: ICustomer
}

function CustomersTableRow({ customer }: Props) {
  const dispatch = useAppDispatch();
  const deleteRow = () => dispatch(deleteCustomer(customer.id));

  return (
    <tr>
      <td>
        <button
          className="customers-table-row__button"
          type="button"
          onClick={deleteRow}
        >
          <img src={deleteIcon} alt="" />
        </button>
      </td>
      <td>
        {customer.company}
      </td>
      <td>
        {customer.name}
      </td>
      <td>
        {customer.additional}
      </td>
      <td>
        {customer.street}
      </td>
      <td>
        {customer.postalCode}
      </td>
      <td>
        {customer.country}
      </td>
      <td>
        {customer.iban}
      </td>
      <td>
        {customer.bic}
      </td>
      <td>
        {customer.bankName}
      </td>
      <td>
        {customer.fax}
      </td>
      <td>
        {customer.email}
      </td>
      <td>
        {customer.birthday && new Date(customer.birthday).toLocaleDateString()}
      </td>
      <td>
        {customer.homepage}
      </td>
    </tr>
  );
}

export default CustomersTableRow;
