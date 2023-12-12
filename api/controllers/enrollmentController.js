const enrollmentService = require("../service/EnrollmentService");

async function enroll(req, res, next){
  try{
    const { course_id, student_id } = req.body;
    const enrollment = await enrollmentService.enroll(course_id, student_id);
    return res.status(201).json({
      status: "success",
      data: enrollment,
    });
  } catch(error){
    return res.status(400).json({
      status: false,
      error: error.message
    })
  }
}

// async function getStudents(req, res, next){
//   try{
//     const { id } = req.params;
//     const students = await enrollmentService.getStudents(id);
//     return res.status(200).json({
//       status: "success",
//       data: students,
//     });
//   } catch(error){
//     return res.status(400).json({
//       status: false,
//       error: error.message
//     })

module.exports = {
  enroll,
  // getStudents
}
