import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { formStrings } from './Strings';
import { formInputFactory } from '../utils/FormHelpers';

const { valid, lName, fName, invalid, submit, email } = formStrings;

const formInputs = [fName, lName, email];

const inputFields = formInputFactory(formInputs, formStrings);

const RSVPForm: React.FC = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: {
    currentTarget: HTMLFormElement;
    preventDefault: () => void;
    stopPropagation: () => void;
  }): void => {
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    return setValidated(true);
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      method="POST"
      data-netlify="true"
      name="rsvp"
      className="mb-5"
    >
      <input type="hidden" name="form-name" value="rsvp" />
      <Form.Row>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {inputFields.map((field: any) => {
          const { type, placeholder, name, defaultValue, controlId } = field;
          console.log('field', type);
          return (
            <Form.Group as={Col} md="4" controlId={controlId} key={controlId}>
              <Form.Label>{placeholder}</Form.Label>
              <Form.Control
                required
                type={type}
                placeholder={placeholder}
                name={name}
                defaultValue={defaultValue}
              />
              <Form.Control.Feedback>{valid}</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {invalid + placeholder}
              </Form.Control.Feedback>
            </Form.Group>
          );
        })}
      </Form.Row>
      <Button className="float-right" type="submit">
        {submit}
      </Button>
    </Form>
  );
};

export default RSVPForm;
