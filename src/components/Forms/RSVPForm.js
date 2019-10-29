import React, { useState } from 'react'
import {
  Formik,
  Form,
} from 'formik'
import Api from '../../utils/Api'
import { InitialValues, MySelect, MyTextInput, Validate, postToGoogleDocs } from './FormHelpers'

const getFormData = () => {
  const rsvpForm = document.getElementById('rsvpForm')
  const formData = new FormData(rsvpForm)
  return postToGoogleDocs(formData)
}

const RSVPForm = () => {
  // const testingValues = {
  //   "email":"robert.andrade.developer@gmail.com",
  //   "guestName":"Sergio R Andrade",
  //   "guestNumber":230948,
  //   "foodChoice":"beef",
  //   "pronouns":"fd"
  // }
  const [Submitted, setSubmitted] = useState(undefined)
  
  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(async () => {
      // console.log(values)
      getFormData()
      await Api.create(values)
      .then((res) => (res.data ? setSubmitted(res.data) : null))
      setSubmitting(false)
    }, 500)
  }

  const PreSubmit = () => (
    <Formik
    initialValues={InitialValues}
    onSubmit={onSubmit}
    validationSchema={Validate}
    >
    {({ isSubmitting }) => (
      <Form className=" w-full max-w-2xl" id="rsvpForm" name="rsvpForm">
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
        <div className="flex flex-wrap md:flex-no-wrap -mx-3 mb-2">
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

  const PostSubmit = () => (
    <div className="text-left">
      <h1 className="text-4xl">Thanks for coming! See you there!</h1>
      <p>Email: {Submitted['email']}</p>
      <p>Name: {Submitted['guestName']}</p>
      <p>Additional Guests: {Submitted['guestNumber']}</p>
      <p>Food Choice: {Submitted['foodChoice']}</p>
      <p>Pronouns: {Submitted['pronouns']}</p>
    </div>
  )
  
  return (
    (Submitted ? <PostSubmit /> : <PreSubmit />)
  )
}

export default RSVPForm
