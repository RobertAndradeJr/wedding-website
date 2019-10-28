import React from 'react'
import {
  Formik,
  Form,
} from 'formik'
import Api from '../../utils/Api'
import { InitialValues, MySelect, MyTextInput, Validate } from './FormHelpers'

const RSVPForm = () => {
  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      Api.create(values)
      // alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 500)
  }
  
  return (
    <Formik
    initialValues={InitialValues}
    onSubmit={onSubmit}
    validationSchema={Validate}
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
  )
}

export default RSVPForm




