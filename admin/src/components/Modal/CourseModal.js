import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export const ModalAction = {
  ADD: 'ADD',
  EDIT: 'EDIT'
}

const CourseModal = ({show, handleClose, handleShow, modalAction}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  const handleInstructorChange = (e) => {
    setPrice(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description, price);
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{modalAction === 'ADD' ? 'Add Course' : 'Edit Course'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3 mt-2">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control mt-1" id="title" placeholder="Enter title" onChange={handleTitleChange}/>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="description">Description</label>
            <input className="form-control mt-1" id="description" rows="3" placeholder="Enter description"  onChange={handleDescriptionChange}></input>
          </div>
          <div className="form-group mb-4">
            <label htmlFor="instructor">Instructor</label>
            <select className="form-control mt-1" id="instructor" onChange={handleInstructorChange}>
              <option value="0">Select Instructor</option>
              <option value="0">Mr. Yuu</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </Modal.Body>
    </Modal>
  )
}

export default CourseModal;