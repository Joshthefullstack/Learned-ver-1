const Enrollment = require("../models/emrollments");

async function enroll(course_id, student_id){
  try{
    const newEnrollment = await Enrollment.enroll(course_id, student_id);
    return newEnrollment;
  }
  catch(error){
    throw error;
  }
}

// async function getStudents(id){
//   try{
//     const students = await Enrollment.getStudents(id);
//     return students;
//   }
//   catch(error){
//     throw error;
//   }

module.exports = {
  enroll,
  // getStudents
}
