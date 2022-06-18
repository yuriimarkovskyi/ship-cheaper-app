import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IBankData } from 'types';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { decrement, increment } from 'redux/slices/counterSlice';
import Button from '../UI/Button';

interface Props {
  close: () => void
  data: object
  setData: (data: IBankData) => void
}

function BankDataForm({
  close, data, setData,
}: Props) {
  const dispatch = useAppDispatch();
  const prevStep = () => dispatch(decrement());
  const nextStep = () => dispatch(increment());

  const {
    register, handleSubmit, formState: { errors },
  } = useForm<IBankData>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<IBankData> = (values) => {
    setData({ ...data, ...values });
    nextStep();
  };

  return (
    <form
      className="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="form__content">
        <h2 className="form__title">
          Bank Data
        </h2>
        <label htmlFor="company">
          <span>
            IBAN*
          </span>
          <input
            id="iban"
            style={errors.iban && { border: '1px solid red' }}
            {...register('iban', { required: 'This field is required' })}
          />
        </label>
        <label htmlFor="name">
          BIC*
          <input
            id="bic"
            style={errors.bic && { border: '1px solid red' }}
            {...register('bic', { required: true })}
          />
        </label>
        <label htmlFor="additional">
          Bank name*
          <input
            id="bankName"
            style={errors.bankName && { border: '1px solid red' }}
            {...register('bankName', { required: true })}
          />
        </label>
      </div>
      <div className="form__buttons">
        <Button
          className="secondary"
          onClick={close}
        >
          Cancel
        </Button>
        <Button
          className="secondary"
          onClick={prevStep}
        >
          Previous
        </Button>
        <Button type="submit">
          Next
        </Button>
      </div>
    </form>
  );
}

export default BankDataForm;
