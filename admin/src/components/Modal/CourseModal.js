import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';

export const ModalAction = {
  ADD: 'ADD',
  EDIT: 'EDIT'
}

const CourseModal = ({show, handleClose, modalAction, users, onSave, selectedCourse}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [instructor_id, setInstructor] = useState('');
  const [error, setError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [instructorError, setInstructorError] = useState('');

  useEffect(() => {
    if(selectedCourse !== null){
      setTitle(selectedCourse.title);
      setDescription(selectedCourse.description);
      setInstructor(selectedCourse.instructor_id);
    } 
    if(modalAction === 'ADD'){
      setTitle('');
      setDescription('');
      setInstructor('')
    }
  }, [selectedCourse, modalAction])

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  const handleInstructorChange = (e) => {
    setInstructor(e.target.value);
  }

  const formData = {
    title: title,
    description: description,
    instructor_id: instructor_id
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(title.length < 5){
      setError('Title must be more than 3 characters');
      return false;
    }
    else if(title.length > 200){
      setError('Title should not be more than 200 characters');
      return false;
    }
    else if(description.length < 5){
      setDescriptionError('Description must be more than 5 characters');
      return false;
    }
    else if(description.length > 200){
      setDescriptionError('Description should not be more than 200 characters');
      return false;
    }
    else if(instructor_id === '0'){
      setInstructorError('Please select an instructor');
      return false;
    }
    else{
      setError('');
      setDescriptionError('');
      setInstructorError('');
    }
    // console.log(formData);
    // const { title , description} = formData;
    const editForm = { id: selectedCourse?.id, title, description, instructor_id }
    modalAction === 'ADD' ? onSave(formData) : onSave(editForm)
    // onSave(formData)
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
            <input type="text" className="form-control mt-1" id="title" placeholder="Enter title" onChange={handleTitleChange} value={title}/>
            <p className='mt-1 error-msg'>{error}</p>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="description">Description</label>
            <input className="form-control mt-1" id="description" rows="3" placeholder="Enter description" value={description}  onChange={handleDescriptionChange}></input>
            <p className='mt-1 error-msg'>{descriptionError}</p>
          </div>
          <div className="form-group mb-4">
            <label htmlFor="instructor">Instructor</label>
            <select className="form-control mt-1" id="instructor" onChange={handleInstructorChange}>
              <option value={selectedCourse !== null ? selectedCourse?.instrustor_id : '0'}>{selectedCourse !== null ? users.find(user => user.id === selectedCourse?.instructor_id).username : 'Select Instructor'}</option>
              {
                users.map((user, key) => {
                  return(
                    user.role === 'teacher' ?
                    <option key={key} value={user.id}>{user.username}</option>
                    :
                    ''
                  )
                  })
              }
            </select>
            <p className='mt-1 error-msg'>{instructorError}</p>
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </Modal.Body>
    </Modal>
  )
}

export default CourseModal;