import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import CoursesModel from "../services/courses/course";
import { useNavigate, useParams } from 'react-router-dom';
import Lesson from "../services/lessons/lesson";
import AlertMod from "../utils/alerts";


const AddLessons = () => {
  const [validated, setValidated] = useState(false);
  const [courses, setCourses] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [course_id, setCourse_id] = useState('');
  const [selectedLesson, setSelectedLesson] = useState([]);
  const navigate = useNavigate(); 
  const { id } = useParams();

  const clearValues = () => {
    setTitle('');
    setContent('');
    setCourse_id('');
  };

  useEffect(() => {
    const fillInValues = async () => {
      if(id){
       await Lesson.getLesson(id)
        .then(res => {
          setSelectedLesson(res.data)
          setTitle(res.data.title);
          setContent(res.data.content);
          setCourse_id(res.data.course_id);
        })
        .catch(err => {
          console.log(err)
        })
      }
    }

    fillInValues();
  }, [id])

  const handleSubmit = async (event) => {
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

    if(id) {
      Lesson.updateLesson(id, formData)
      .then(res => {
        AlertMod.confirmationAlert('Lesson has been updated', 'success');
        navigate('/lessons')
      })
      .catch(err => {
        console.log(err)
      })
    }
    else {
     await Lesson.addLesson(formData)
      .then(res => {
        AlertMod.confirmationAlert('Lesson has been created', 'success');
        clearValues();
        setValidated(false);
      })
      .catch(err => {
        console.log(err)
      })
    }

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
      <div className='header-flex'>
         <h1 className="mb-3 mt-4">{ id ? 'Edit Lesson' : 'Add Lesson'}</h1>
        <Button variant='danger' onClick={() => navigate(-1)}>Back</Button>
      </div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom01"
            className="mb-3"
          >
            <Form.Label>Lesson Title</Form.Label>
            <Form.Control required type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title} />
            <Form.Control.Feedback type="invalid">
              Please fill in your lesson title
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom02" className="mb-5">
            <Form.Label>Content</Form.Label>
            <Form.Control required as="textarea" placeholder="Content" className="h-100" onChange={(e) => {setContent(e.target.value)}} value={content}  />
            <Form.Control.Feedback type="invalid">
              Please fill in your lesson content
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="12" controlId="validationCustom03" className="mt-4">
            <Form.Select required onChange={(e) => {setCourse_id(e.target.value)}}>course
            <option value={selectedLesson !== null ? selectedLesson?.course_id : '0'}>{selectedLesson.length !== 0 ? courses.find(course => course.id === selectedLesson?.course_id)?.title : 'Select Course'}</option>
              {
                courses.map((course, key) => {
                  return(                 
                    <option key={key} value={course.id}>{course.title}</option>  
                  )
                  })
              }
            </Form.Select>
            </Form.Group>
        </Row>
        <Button type="submit" className="mt-3">Submit form</Button>
      </Form>
    </div>
  );
};

export default AddLessons;
