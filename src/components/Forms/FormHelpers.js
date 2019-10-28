import React from 'react'
import * as Yup from 'yup'
import { useField } from 'formik';

export const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form md:w-1/2 md:mb-0">
      <label className="form--label" htmlFor={props.id || props.name}>{label}</label>
      <input className={"form--input mb-3 focus:outline-none focus:bg-white " + (meta.touched && meta.error ? 'border-red-500' : '')} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="form--error">{meta.error}</div>
      ) : null}
    </div>
  )
}

export const InitialValues = {
  email: '',
  guestName: '',
  guestNumber: '',
  foodChoice: '',
  pronouns: '',
}

export const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form md:w-1/2 md:mb-0">
      <label className="form--label" htmlFor={props.id || props.name}>{label}</label>
      <select className="form--input border-gray-200 pr-8 focus:outline-none focus:bg-white focus:border-gray-500" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="form--error">{meta.error}</div>
      ) : null}
    </div>
  )
}

export const Validate = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  guestName: Yup.string()
    .max('50', 'Name is too long')
    .required('Required'),
  guestNumber: Yup.number(),
  foodChoice: Yup.string()
    .oneOf(
      ['fish', 'chicken', 'beef', 'booty'], 'We are not serving that'
    ),
  pronouns: Yup.string(),
  })