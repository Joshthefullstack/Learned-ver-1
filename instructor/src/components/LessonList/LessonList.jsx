import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


const LessonList = ({lesson, setShowLesson, setSelectedLesson}) => {
  return (
    <div>
      <ListGroup as="ol" numbered className='mt-3'>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{lesson.title}</div>
          Duration: 15 minutes
        </div>
        <Button bg="primary" onClick={() => {setShowLesson(true); setSelectedLesson(lesson)}}>
          View Lesson
        </Button>
      </ListGroup.Item>
    </ListGroup>
    </div>
  )
}

export default LessonList