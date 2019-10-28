import React, { useState } from 'react'
import {
  Formik,
  Form,
  useField,
} from 'formik'
import * as Yup from 'yup'
import ScrollableAnchor from 'react-scrollable-anchor'

import Api from '../../utils/Api'

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error text-red-500 text-xs italic">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" htmlFor={props.id || props.name}>{label}</label>
      <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error text-red-500 text-xs italic">{meta.error}</div>
      ) : null}
    </div>
  );
};


const RsvpSection = () => {
  const [RsvpData, setRsvpData] = useState(undefined)
  const initialValues = {
    email: '',
    guestName: '',
    guestNumber: '',
    foodChoice: '',
    pronouns: '',
  }
  const validate = Yup.object({
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

    const onSubmit = (values, { setSubmitting }) => {
      setTimeout(() => {
        Api.create(values)
        // alert(JSON.stringify(values, null, 2))
        setSubmitting(false)
      }, 500)
    }
  
  const handleClick = async () => setRsvpData(await Api.readAll())
  return (
    <ScrollableAnchor id="RSVP">
      <section className="text-white items-center flex flex-col justify-around py-24">
        <div className="w-full max-w-4xl bg-gray-900 flex flex-col items-center justify-around py-12 px-6">
          <button type="button" onClick={() => handleClick()}>
            {JSON.stringify(RsvpData) || 69}
          </button>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validate}
          >
            {({ isSubmitting }) => (
              <Form className=" w-full max-w-2xl">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <MyTextInput
                    id="email"
                    name="email"
                    placeholder="email"
                    type="email"
                    label="email"
                  />
                  <MyTextInput
                    id="guestName"
                    name="guestName"
                    placeholder="Enter your name"
                    type="text"
                    label="Name"
                  />
                </div>
                <div class="flex flex-wrap md:flex-no-wrap -mx-3 mb-2">
                  <MyTextInput
                    id="guestNumber"
                    name="guestNumber"
                    placeholder="How many guests?"
                    type="number"
                    label="Guests"
                  />
                  <MySelect
                    id="foodChoice"
                    name="foodChoice"
                    placeholder="What would you like to eat?"
                    type="text"
                    label="Dish"
                  >
                    <option value="">Dish?</option>
                    <option value="fish">Fish</option>
                    <option value="chicken">Chicken</option>
                    <option value="beef">Beef</option>
                    <option value="booty">Booty</option>
                  </MySelect>
                  <MyTextInput
                    id="pronouns"
                    name="pronouns"
                    placeholder="What are your pronouns?"
                    type="text"
                    label="pronouns"
                  />
                </div>
                <button type="submit" disabled={isSubmitting} className="text-white">
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </ScrollableAnchor>
  )
}

export default RsvpSection
