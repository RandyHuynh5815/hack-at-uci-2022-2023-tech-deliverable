import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import "./application.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Application() {
  const [validated, setValidated] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [funFact, setFunFact] = useState("")
  const [emailError, setEmailError] = useState("")

  const validateEmail = (email) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const query = {
      name: name,
      email: email,
      funfact: funFact
    }

    const usp = new URLSearchParams(query)
    const url = "https://hack-tech-app-endpoint.herokuapp.com/test?" + usp

    const response = await fetch(url, {
      method: "GET"
    })
      .then(response => {
        if (response.ok) {
          console.log("Response valid lessgo")
          setName("")
          setEmail("")
          setFunFact("")
          toast.success("Form successfully submitted")
          setValidated(false)
        } else {
          if (email === "") {
            setEmailError("Please enter an email address");
          } else if (!validateEmail(email)) {
            setEmailError("This is not a valid email address. A valid address ends with @<url>")
          }
          setValidated(true)
          console.log("That response aint it")
        }
      })
  };

  return (
    <div className='application'>
      <Form noValidate validated={validated} onSubmit={handleSubmit} id="form">
        <h1>Hack UCI Application</h1>
        <Form.Group hasValidation className="mb-3" controlId="formBasicName">
          <Form.Label className='formLabel'>Name</Form.Label>
          <Form.Control className="formControl" type="name" 
            placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required/>
          <Form.Control.Feedback type="invalid">Please enter a name</Form.Control.Feedback>
        </Form.Group>

        <Form.Group hasValidation className="mb-3" controlId="formBasicEmail">
          <Form.Label className='formLabel'>Email</Form.Label>
          <Form.Control className="formControl" type="email" placeholder="Email" 
            value={email} onChange={(e) => setEmail(e.target.value)} pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" required/>
          <Form.Control.Feedback type="invalid">{emailError}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group hasValidation className="mb-3" controlId="formBasicFunFact">
          <Form.Label className='formLabel'>Fun Fact</Form.Label>
          <Form.Control className="formControl" as="textarea" rows={5} placeholder="Fun Fact" 
            value={funFact} onChange={(e) => setFunFact(e.target.value)} required/>
          <Form.Control.Feedback type="invalid">Please enter a fun fact</Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" className='button'>
          Submit
        </Button>
      </Form>
      <ToastContainer />
    </div>
  )
}
