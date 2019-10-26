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

const DisplayFormikState = (props) => (
  <div className="text-black" style={{ margin: '1rem 0' }}>
    <h3 style={{ fontFamily: 'monospace' }} />
    <pre
      style={{
        background: '#f6f8fa',
        fontSize: '.65rem',
        padding: '.5rem',
      }}
    >
      <strong>props</strong>
      = 
      {' '}
      {JSON.stringify(props, null, 2)}
    </pre>
  </div>
)

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
            Api.create(values)
            console.log(values)
            setTimeout(() => {
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
          {(props) => {
            const {
              values,
              touched,
              errors,
              dirty,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset,
            } = props
            return (
              <form onSubmit={handleSubmit} className="text-black">
                <label htmlFor="email" style={{ display: 'block' }}>
                  Email
                </label>
                <input
                  id="email"
                  placeholder="Enter your email"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email ? 'text-input error' : 'text-input'
                  }
                />
                <input
                  id="firstName"
                  placeholder="Enter your First Name"
                  type="text"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.firstName && touched.firstName ? 'text-input error' : 'text-input'
                  }
                />
                <input
                  id="lastName"
                  placeholder="Enter your Last Name"
                  type="text"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.lastName && touched.lastName ? 'text-input error' : 'text-input'
                  }
                />
                <input
                  id="guestNumber"
                  placeholder="How many guests are coming with you?"
                  type="number"
                  value={values.guestNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.guestNumber && touched.guestNumber ? 'text-input error' : 'text-input'
                  }
                />
                <input
                  id="foodChoice"
                  placeholder="What would you like to eat?"
                  type="text"
                  value={values.foodChoice}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.foodChoice && touched.foodChoice ? 'text-input error' : 'text-input'
                  }
                />
                <input
                  id="pronouns"
                  placeholder="What are your pronouns?"
                  type="text"
                  value={values.pronouns}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.pronouns && touched.pronouns ? 'text-input error' : 'text-input'
                  }
                />
                {errors.pronouns && touched.pronouns && (
                  <div className="input-feedback">{errors.pronouns}</div>
                )}

                <button
                  type="button"
                  className="outline text-white"
                  onClick={handleReset}
                  disabled={!dirty || isSubmitting}
                >
                  Reset
                </button>
                <button type="submit" disabled={isSubmitting} className="text-white">
                  Submit
                </button>

                <DisplayFormikState {...props} />
              </form>
            )
          }}
        </Formik>
      </section>
    </ScrollableAnchor>
  )
}

export default RsvpSection
