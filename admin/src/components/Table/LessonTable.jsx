import React from 'react';
import { Table } from 'react-bootstrap';
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const LessonTable = ({lessons, courses, users}) => {
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
          {
            lessons.map((item, key) => {
              return (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.course_id
                    ? users.find((user) => user.id === item.instructor_id)
                        .username
                    : ""}</td>
                  <td>{'Mr. Yuu'}</td>
                  <td>
                    <FiEdit className="icon edit_icon" />
                    <MdDelete className="icon delete_icon" />
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  )
}

export default LessonTable
