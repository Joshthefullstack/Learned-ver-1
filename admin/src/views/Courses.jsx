import React from "react";
import { Table, Button } from "react-bootstrap";
import CoursesModel from "../services/courses/course";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import CourseModal, { ModalAction } from "../components/Modal/CourseModal";
import User from "../services/users/users";
import Lesson from "../services/lessons/lesson";

const Courses = () => {
  const [courses, setCourses] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [lessons, setLessons] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

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
        setCourses(courses);
        setUsers(users.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  //  const deleteCourse = async (courseId) => {
  //  setLoading(true);
  //  try {
  //     await CoursesModel.deleteCourse(courseId);
  //     setCourses(courses.filter(course => course.id !== courseId));
  //  } catch (err) {
  //     console.log(err);
  //  } finally {
  //     setLoading(false);
  //  }
  // };

  // const addOrEditCourse = async (course) => {
  //   setLoading(true);
  //   try {
  //      if (modalAction === ModalAction.CREATE) {
  //        await CoursesModel.createCourse(course);
  //      } else {
  //        await CoursesModel.updateCourse(course);
  //      }
  //      handleClose();
  //      const fetchedCourses = await CoursesModel.getCourses();
  //      setCourses(fetchedCourses);
  //   } catch (err) {
  //      console.log(err);
  //   } finally {
  //      setLoading(false);
  //   }
  //  };

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
      />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Title</th>
              <th>Instructor</th>
              <th>Number of Lessons</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses?.data?.map((item, key) => {
              return (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{item.title}</td>
                  <td>
                    {item.instructor_id
                      ? users.find((user) => user.id === item.instructor_id)
                          .username
                      : ""}
                  </td>
                  <td>
                    {
                      lessons.filter((lesson) => item.id === lesson.course_id)
                        .length
                    }
                  </td>
                  <td>
                    <FiEdit className="icon edit_icon" />
                    <MdDelete className="icon delete_icon" />
                    <FiPlus className="icon plus_icon" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default Courses;
