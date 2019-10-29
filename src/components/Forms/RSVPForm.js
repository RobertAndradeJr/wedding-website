import React, { useState } from 'react'
import {
  Formik,
  Form,
  Field,
} from 'formik'
import Api from '../../utils/Api'
import {
  InitialValues,
  MySelect,
  MyTextInput,
  Validate,
  postToGoogleDocs,
} from './FormHelpers'

const getFormData = () => {
  const rsvpForm = document.getElementById('rsvpForm')
  const formData = new FormData(rsvpForm)
  return postToGoogleDocs(formData)
}

const RSVPForm = () => {
  const [Submitted, setSubmitted] = useState(undefined)

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(async () => {
      getFormData()
      await Api.create(values)
        .then((res) => (res.data ? setSubmitted(res.data) : null))
      setSubmitting(false)
    }, 500)
  }
  const selectOptions = [
    'Dish?',
    'Fish',
    'Chicken',
    'Beef',
    'Booty',
  ]

  const submitText = 'Submit'

  const greeting = 'Thanks for coming! See you there!'

  const PreSubmit = () => (
    <Formik
      initialValues={InitialValues}
      onSubmit={onSubmit}
      validationSchema={Validate}
    >
      {({ isSubmitting }) => (
        <Form className=" w-full max-w-2xl" netlify id="rsvpForm" name="rsvpForm" data-netlify="true">
          <Field type="hidden" name="form-name" value="rsvpForm" />
          <Field type="hidden" name="bot-field" />
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
              {selectOptions.map((val, i) => (
                <option
                  key={val}
                  value={(i === 0 ? '' : val.toLowerCase())}
                >
                  {val}
                </option>
              ))}
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
            {submitText}
          </button>
        </Form>
      )}
    </Formik>
  )

  const PostSubmit = () => {
    const email = `Email: ${Submitted.email}`
    const guestName = `Name: ${Submitted.guestName}`
    const guestNumber = `Additional Guests: ${Submitted.guestNumber}`
    const foodChoice = `Food Choice: ${Submitted.foodChoice}`
    const pronouns = `Pronouns: ${Submitted.pronouns}`
    return (
      <div className="text-left">
        <h1 className="text-4xl">{greeting}</h1>
        <p>
          {email}
        </p>
        <p>
          {guestName}
        </p>
        <p>
          {guestNumber}
        </p>
        <p>
          {foodChoice}
        </p>
        <p>
          {pronouns}
        </p>
      </div>
    )
  }

  return (
    (Submitted ? <PostSubmit /> : <PreSubmit />)
  )
}

export default RSVPForm
