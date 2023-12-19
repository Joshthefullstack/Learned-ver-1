import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";


const LessonComponent = ({setShowLesson, selectedLesson, selectedCourse}) => {
  return (
    <div className='containers'>
      <div className='header-flex'>
        <h1 className='mt-5'>Title: {selectedLesson.title}</h1>
        <Button variant='danger' onClick={() => {setShowLesson(false)}}>Back</Button>
      </div>
      <h2>Course: {selectedCourse.title}</h2>
      <p>Content: {selectedLesson.content}</p>
      <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Take Notes:</Form.Label>
            <Form.Control as="textarea" />
          </Form.Group>
      </Form>
    </div>
  )
}

export default LessonComponent