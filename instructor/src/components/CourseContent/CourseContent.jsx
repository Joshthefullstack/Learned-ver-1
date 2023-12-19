import React from 'react';
import style from "../../styles/CourseContent.module.css";
import CourseCard from "../Card/CourseCard";
import CourseModel from "../../services/courses/course"

const CourseContent = ({setShowCourse, setSelectedCourse}) => {
  const [courses, setCourses] = React.useState([]);

  React.useEffect(() => { 
    async function fetchCourses(){
    try{
      await CourseModel.getCourses().then((res) => {
        setCourses(res.data);
      })
    } catch(err){
      console.log(err);
    }
  }

    fetchCourses();
  }, [courses]);

  return (
    <div className={style.container} id='courses'>
      <h1>Come have a look at our available courses.</h1>

      <div>
        {
          courses.map((course, key) => {
            return (<div key={key}><CourseCard key={course._id} course={course} setShowCourse={setShowCourse} setSelectedCourse={setSelectedCourse} /></div>)
          })
        }
      </div>
    </div>
  )
}

export default CourseContent;