import React from 'react';
import { Form, Button } from 'react-bootstrap';
import "./application.scss";

export default function Application() {
  return (
    <div className='application'>
      <Form id="form">
        <h1>Hack UCI Application</h1>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className='formLabel'>Name</Form.Label>
          <Form.Control className="formControl" type="name" placeholder="Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className='formLabel'>Email</Form.Label>
          <Form.Control className="formControl" type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicFunFact">
          <Form.Label className='formLabel'>Fun Fact</Form.Label>
          <Form.Control className="formControl" as="textarea" rows={5} placeholder="Fun Fact"/>
        </Form.Group>

        <Button variant="primary" type="submit" className='button'>
          Submit
        </Button>
      </Form>
    </div>
  )
}
