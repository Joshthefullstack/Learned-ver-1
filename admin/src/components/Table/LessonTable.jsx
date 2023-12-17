import React from "react";
import { Table } from "react-bootstrap";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import AlertMod from "../../utils/alerts";

const LessonTable = ({ lessons, courses, users, handleDelete }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Title</th>
            <th>Course</th>
            <th>Instructor</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {lessons.map((item, key) => {
            return (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{item.title}</td>
                <td>
                  {item.course_id
                    ? courses.find((course) => course.id === item.course_id)
                        .title
                    : ""}
                </td>
                <td>
                  {
                    users.find(
                      (user) =>
                        user.id ===
                        courses.find((course) => course.id === item.course_id)
                          .instructor_id
                    ).username
                  }
                </td>
                <td>
                  <FiEdit
                    className="icon edit_icon"
                    onClick={() => {
                      navigate(`/edit-lessons/${item.id}`);
                    }}
                  />
                  <MdDelete className="icon delete_icon" onClick={ () => {
                    AlertMod.confirmDelete(
                      "Lesson",
                      handleDelete.bind(null, item.id)
                    );
                  }} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default LessonTable;
