import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import contact_us from "../../assets/contact us.png";
import style from "../../styles/ContactContent.module.css";


const ContactContent = () => {
  return (
    <div className={style.container}>
      <h1>Reach Out to Us</h1>
      <div className={style.container2}>
      <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Leave a message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <img src={contact_us} alt=''/>
      </div>
    </div>

  );
};

export default ContactContent;
