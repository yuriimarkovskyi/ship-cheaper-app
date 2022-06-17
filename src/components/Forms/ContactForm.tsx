import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IContact } from 'types';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { addCustomer } from 'store/customersSlice';
import { decrement } from 'store/counterSlice';
import Button from '../UI/Button';

interface Props {
  close: () => void
  data: object
  setData: (data: {}) => void
}

function ContactForm({
  close, data, setData,
}: Props) {
  const dispatch = useAppDispatch();
  const prevStep = () => dispatch(decrement());

  const {
    register, handleSubmit,
  } = useForm<IContact>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<IContact> = (values) => {
    const { birthday } = values;
    const contact: IContact = {
      ...values,
      birthday: birthday && new Date(birthday).getTime(),
    };

    dispatch(addCustomer({
      ...data,
      ...contact,
      id: Date.now(),
    }));
    setData({});
    close();
  };

  return (
    <form
      className="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="form__title">
        Contact
      </h2>
      <label htmlFor="fax">
        <span>
          Fax
        </span>
        <input
          id="fax"
          {...register('fax')}
        />
      </label>
      <label htmlFor="email">
        <span>
          E-mail
        </span>
        <input
          id="email"
          type="email"
          {...register('email')}
        />
      </label>
      <label htmlFor="birthday">
        <span>
          Birthday
        </span>
        <input
          id="birthday"
          type="date"
          {...register('birthday')}
        />
      </label>
      <label htmlFor="homepage">
        <span>
          Homepage
        </span>
        <input
          id="homepage"
          type="url"
          {...register('homepage')}
        />
      </label>

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
          Save
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;
