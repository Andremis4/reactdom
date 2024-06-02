import React from 'react'
import NavBar from '../components/NavBar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function About() {
  return (
    <div>
      <NavBar></NavBar>
      <h2 className='text-center mt-3'>Cuentanos, en que te podemos ayudar? ❤ </h2>
      <div className='formulario'> 
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
            </Form.Group>
      <Button variant="danger" type="submit">
        Enviar
      </Button>
    </Form>
    </div>
    </div>
  )
}
