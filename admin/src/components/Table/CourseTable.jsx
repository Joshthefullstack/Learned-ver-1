import React from "react";
import { Table } from "react-bootstrap";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import AlertMod from "../../utils/alerts";
import { ModalAction } from "../Modal/CourseModal";

const CourseTable = ({
  users,
  courses,
  lessons,
  handleShow,
  setModalAction,
  setSelectedCourse,
  deleteCourse,
}) => {
  const navigate = useNavigate();

  return (
    <div>
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
          {courses.map((item, key) => {
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
                  <FiEdit
                    className="icon edit_icon"
                    onClick={() => {
                      setModalAction(ModalAction.EDIT);
                      handleShow();
                      setSelectedCourse(item);
                    }}
                  />
                  <MdDelete
                    className="icon delete_icon"
                    onClick={() => {
                      AlertMod.confirmDelete(
                        "Course",
                        deleteCourse.bind(null, item.id)
                      );
                    }}
                  />
                  <FiPlus
                    className="icon plus_icon"
                    onClick={() => navigate("/add-lessons")}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default CourseTable;
