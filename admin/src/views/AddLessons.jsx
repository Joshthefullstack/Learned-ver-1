import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import CoursesModel from "../services/courses/course";


const AddLessons = () => {
  const [validated, setValidated] = useState(false);
  const [courses, setCourses] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [course_id, setCourse_id] = useState('');

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    event.preventDefault();
    const formData = {
      title, content, course_id
    }
    console.log(formData);
  };

  useEffect(() => {
    const fetchData = async () => {
      try{
        const courses = await CoursesModel.getCourses();
        setCourses(courses.data);
      } catch(err) {
        console.log(err)
      }
    }

    fetchData();
  }, []);

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
            <Form.Control required type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
            <Form.Control.Feedback type="invalid">
              Please fill in your lesson title
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom02" className="mb-5">
            <Form.Label>Content</Form.Label>
            <Form.Control required as="textarea" placeholder="Content" className="h-100" onChange={(e) => {setContent(e.target.value)}}  />
            <Form.Control.Feedback type="invalid">
              Please fill in your lesson content
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="12" controlId="validationCustom03" className="mt-4">
            <Form.Select required onChange={(e) => {setCourse_id(e.target.value)}}>
              <option>Select Course</option>
              {
                courses.map((course, key) => {
                  return(                 
                    <option key={key} value={course.id}>{course.title}</option>  
                  )
                  })
              }
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select a course
            </Form.Control.Feedback>
            </Form.Group>
        </Row>
        <Button type="submit" className="mt-3">Submit form</Button>
      </Form>
    </div>
  );
};

export default AddLessons;
