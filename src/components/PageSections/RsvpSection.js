import React, { useState } from 'react'
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from 'formik'
import * as Yup from 'yup'
import ScrollableAnchor from 'react-scrollable-anchor'
import { RsvpStrings, HomeStrings } from '../Strings/Strings'
import Api from '../../utils/Api'

const { RSVP } = RsvpStrings
const { detail } = HomeStrings
const {
  WHEN,
  WHERE,
  ADDRESS,
  WEDDING_ADDRESS,
  WEDDING_DATE,
  WEDDING_LOCATION,
} = detail

const detailStyles = 'items-center'

const RsvpSection = () => {
  const [RsvpData, setRsvpData] = useState(undefined)

  const handleClick = async () => setRsvpData(await Api.readAll())
  return (
    <ScrollableAnchor id="RSVP">
      <section className="h-screen text-white p-24">
        <h2 className="text-4xl">{RSVP}</h2>
        <div className={detailStyles}>
          <h2>{WHEN}</h2>
          <p>{WEDDING_DATE}</p>
        </div>
        <div className={detailStyles}>
          <h2>{WHERE}</h2>
          <p>{WEDDING_LOCATION}</p>
        </div>
        <div className={detailStyles}>
          <h2>{ADDRESS}</h2>
          <p>{WEDDING_ADDRESS}</p>
        </div>
        <button type="button" onClick={() => handleClick()}>
          {JSON.stringify(RsvpData) || 69}
        </button>
        <Formik
          initialValues={{
            email: '',
            firstName: '',
            lastName: '',
            guestNumber: '',
            foodChoice: '',
            pronouns: '',
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              Api.create(values)
              // alert(JSON.stringify(values, null, 2))
              setSubmitting(false)
            }, 500)
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email()
              .required('Required'),
          })}
        >
          {({ isSubmitting }) => (
            <Form className="text-black">
              <Field
                id="email"
                name="email"
                placeholder="email"
                type="email"
              />
              <Field
                id="firstName"
                name="firstName"
                placeholder="Enter your First Name"
                type="text"
              />
              <Field
                id="lastName"
                name="lastName"
                placeholder="Enter your Last Name"
                type="text"
              />
              <Field
                id="guestNumber"
                name="guestNumber"
                placeholder="How many guests are coming with you?"
                type="number"
              />
              <Field
                id="foodChoice"
                name="foodChoice"
                placeholder="What would you like to eat?"
                type="text"
              />
              <Field
                id="pronouns"
                name="pronouns"
                placeholder="What are your pronouns?"
                type="text"
              />
              <button type="submit" disabled={isSubmitting} className="text-white">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </section>
    </ScrollableAnchor>
  )
}

export default RsvpSection
