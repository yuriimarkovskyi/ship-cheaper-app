import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IInvoiceAddress } from 'types';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { increment } from 'store/counterSlice';
import Button from '../UI/Button';

interface Props {
  close: () => void
  setData: (data: IInvoiceAddress) => void
}

function InvoiceAddressForm({ close, setData }: Props) {
  const dispatch = useAppDispatch();
  const nextStep = () => dispatch(increment());

  const {
    register, handleSubmit, formState: { errors },
  } = useForm<IInvoiceAddress>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<IInvoiceAddress> = (values) => {
    setData(values);
    nextStep();
  };

  return (
    <form
      className="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="form__title">
        Invoice Address
      </h2>
      <label htmlFor="company">
        <span>
          Company*
        </span>
        <input
          id="company"
          style={errors.company && { border: '1px solid red' }}
          {...register('company', { required: 'This field is required' })}
        />
      </label>
      <label htmlFor="name">
        Name*
        <input
          id="name"
          style={errors.company && { border: '1px solid red' }}
          {...register('name', { required: true })}
        />
      </label>
      <label htmlFor="additional">
        Additional
        <input id="additional" {...register('additional')} />
      </label>
      <label htmlFor="street">
        Street
        <input id="street" {...register('street')} />
      </label>
      <label htmlFor="postalCode">
        Postal Code
        <input
          id="postalCode"
          type="number"
          {...register('postalCode')}
        />
      </label>
      <label htmlFor="country">
        Country
        <select {...register('country')}>
          <option defaultValue="" />
          <option value="Ukraine">
            Ukraine
          </option>
          <option value="USA">
            USA
          </option>
          <option value="Poland">
            Poland
          </option>
        </select>
      </label>

      <div className="form__buttons">
        <Button
          className="secondary"
          onClick={close}
        >
          Cancel
        </Button>
        <Button type="submit">
          Next
        </Button>
      </div>
    </form>
  );
}

export default InvoiceAddressForm;
