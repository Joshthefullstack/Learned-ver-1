import React from 'react';
import Lesson from "../../services/lessons/lesson";
import LessonList from "../../components/LessonList/LessonList";
import LessonComponent from "../../views/client/Lesson";
import Button from "react-bootstrap/Button"

const Course = ({selectedCourse, setShowCourse}) => {
  // console.log(selectedCourse);
  const [lesson, setLesson] = React.useState([]);
  const [showLesson, setShowLesson] = React.useState(false);
  const [selectedLesson, setSelectedLesson] = React.useState({});

  React.useEffect(() => {
    const getLesson = async () => {
      const { data } = await Lesson.getLessons();
      setLesson(data.filter((lesson) => lesson.course_id === selectedCourse.id));
      
    };
    getLesson();
  }, [selectedCourse]);


  return (
    <div>
      { showLesson ? 
          <LessonComponent setShowLesson={setShowLesson} selectedLesson={selectedLesson} selectedCourse={selectedCourse} /> :
          <div className='containers'>
            <div className='header-flex'>
              <h1 className='mt-5'>{selectedCourse.title}</h1>
              <Button variant='danger' onClick={() => {setShowCourse(false)}}>Back</Button>
            </div>
            <h1>Lessons</h1>
            {
              lesson.length === 0 ? <p>No lessons available</p> : 
              lesson.map((lesson, key) => {
                return (
                  <div key={key}>
                    <LessonList lesson={ lesson } setShowLesson={setShowLesson} setSelectedLesson={setSelectedLesson} />
                  </div>
                )
              })
              // ''
              }
          </div>
      }
    </div>
  )
}

export default Course