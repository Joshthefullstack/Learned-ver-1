import React from "react";
import { Button } from "react-bootstrap";
import CoursesModel from "../services/courses/course";
import CourseModal, { ModalAction } from "../components/Modal/CourseModal";
import User from "../services/users/users";
import Lesson from "../services/lessons/lesson";
import AlertMod from "../utils/alerts";
import CourseTable from "../components/Table/CourseTable";

const Courses = () => {
  const [courses, setCourses] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [lessons, setLessons] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [selectedCourse, setSelectedCourse] = React.useState(null);

  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  const [modalAction, setModalAction] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const courses = await CoursesModel.getCourses();
        const users = await User.getUsers();
        const lessons = await Lesson.getLessons();
        setLessons(lessons.data);
        setCourses(courses.data);
        setUsers(users.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const deleteCourse = async (courseId) => {
    setLoading(true);
    try {
      await CoursesModel.deleteCourse(courseId);
      setCourses(courses.filter((course) => course.id !== courseId));
    } catch (err) {
      // console.log(err.response);
      if(err.response.data.status === false){
        // if (!AlertMod.simpleAlert("Error", err.response.data.message)) return;
        AlertMod.confirmationAlert(err.response.data.error, "error");
      }
    } finally {
      setLoading(false);
    }
  };

  const addOrEditCourse = async (course) => {
    setLoading(true);
    try {
      if (modalAction === "ADD") {
        await CoursesModel.createCourse(course);
        AlertMod.confirmationAlert("Course added successfully", "success");
      } else {
        await CoursesModel.updateCourse(course);
        handleClose();
        AlertMod.confirmationAlert("Course edited successfully", "success");
      }
      const fetchedCourses = await CoursesModel.getCourses();
      setCourses(fetchedCourses.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="header-flex mb-5">
        <h1>Courses</h1>
        <Button
          onClick={() => {
            setModalAction(ModalAction.ADD);
            handleShow();
          }}
        >
          Add Course
        </Button>
      </div>

      <CourseModal
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        modalAction={modalAction}
        users={users}
        onSave={addOrEditCourse}
        selectedCourse={selectedCourse}
      />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <CourseTable
          users={users}
          courses={courses}
          lessons={lessons}
          handleShow={handleShow}
          setSelectedCourse={setSelectedCourse}
          deleteCourse={deleteCourse}
        />
      )}
    </div>
  );
};

export default Courses;
