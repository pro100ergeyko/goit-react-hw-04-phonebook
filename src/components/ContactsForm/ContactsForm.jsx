import React from 'react';
import { Formik } from 'formik';
// import { nanoid } from 'nanoid';
import * as Yup from 'yup';

import {
  AddContactToForm,
  ButtontToAddContact,
  ErrorMes,
  FieldInput,
  Label,
} from './ContactsForm.styled';

const ContactsSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я\s'-]*$/, 'Name should not contain numbers')
    .required(),
  number: Yup.string()
    .min(5, 'Too short  phone number')
    .max(10, 'Too long phone number')
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Invalid phone number format'
    )
    .required(),
});

export const ContactsForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={onSubmit}
      validationSchema={ContactsSchema}
    >
      <AddContactToForm>
        <Label>
          Name
          <FieldInput type="text" name="name" />
          <ErrorMes name="name" component="div" />
        </Label>
        <Label>
          Number
          <FieldInput type="tel" name="number" />
          <ErrorMes name="number" component="div" />
        </Label>
        <ButtontToAddContact type="submit">Add contact</ButtontToAddContact>
      </AddContactToForm>
    </Formik>
  );
};
