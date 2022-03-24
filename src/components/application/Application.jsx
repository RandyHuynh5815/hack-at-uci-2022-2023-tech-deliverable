import React, {useState} from 'react';
import { Form, Button, Feedback } from 'react-bootstrap';
import "./application.scss";

export default function Application() {
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className='application'>
      <Form noValidate validated={validated} onSubmit={handleSubmit} id="form">
        <h1>Hack UCI Application</h1>
        <Form.Group hasValidation className="mb-3" controlId="formBasicName">
          <Form.Label className='formLabel'>Name</Form.Label>
          <Form.Control className="formControl" type="name" placeholder="Name" required/>
          <Form.Control.Feedback type="invalid">Please enter a name</Form.Control.Feedback>
        </Form.Group>

        <Form.Group hasValidation className="mb-3" controlId="formBasicEmail">
          <Form.Label className='formLabel'>Email</Form.Label>
          <Form.Control className="formControl" type="email" placeholder="Email" required/>
          <Form.Control.Feedback type="invalid">Please enter an email</Form.Control.Feedback>
        </Form.Group>

        <Form.Group hasValidation className="mb-3" controlId="formBasicFunFact">
          <Form.Label className='formLabel'>Fun Fact</Form.Label>
          <Form.Control className="formControl" as="textarea" rows={5} placeholder="Fun Fact" required/>
          <Form.Control.Feedback type="invalid">Please enter a fun fact</Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" className='button'>
          Submit
        </Button>
      </Form>
    </div>
  )
}
