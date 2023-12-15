import React from "react";
import { Button } from "react-bootstrap";
import LessonTable from "../components/Table/LessonTable";
import Lesson from "../services/lessons/lesson";
import User from "../services/users/users";
import CourseModel from "../services/courses/course";


const Lessons = () => {
  const [loading, isLoading] = React.useState(false);
  const [lessons, setLessons] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [courses, setCourses] = React.useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      isLoading(true);
      try {
        const lessons = await Lesson.getLessons();
        const users = await User.getUsers();
        const courses = await CourseModel.getCourses();
        setCourses(courses.data)
        setLessons(lessons.data);
        setUsers(users.data);
      } catch (err) {
        console.log(err);
      } finally {
        isLoading(false);
      }
    };
    fetchData();
  }, []);


  return (
    <div>
      <div className="header-flex mb-5">
        <h1>Lessons</h1>
        <Button
          onClick={() => {
            // setModalAction(ModalAction.ADD);
            // handleShow();
          }}
        >
          Add Lesson
        </Button>
      </div>

      {loading ? <div>Loading</div> : <LessonTable lessons={lessons} courses={courses} users={users} />}
    </div>
  );
};

export default Lessons;
