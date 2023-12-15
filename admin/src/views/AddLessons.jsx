import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const AddLessons = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div>
      <h1 className="mb-3 mt-4">Add Lessons</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom01"
            className="mb-3"
          >
            <Form.Label>Lesson Title</Form.Label>
            <Form.Control required type="text" placeholder="Title" />
            <Form.Control.Feedback type="invalid">
              Please fill in your lesson title
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom02" className="mb-4">
            <Form.Label>Content</Form.Label>
            <Form.Control required as="textarea" placeholder="Content" />
            <Form.Control.Feedback type="invalid">
              Please fill in your lesson content
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Select aria-label="Default select example">
              <option>Select instructor</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            </Form.Group>
        </Row>
        <Button type="submit" className="mt-3">Submit form</Button>
      </Form>
    </div>
  );
};

export default AddLessons;
