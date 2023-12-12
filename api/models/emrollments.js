const pool = require("../config/dbConfig.js");
const { ENROLLMENTS, USERS } = require("../utils/constants.js").TABLES;
const {generateUniqueId } = require("../utils/utils.js");

class EnrollmentModel {
  constructor({pool}){
    this.pool = pool;
  }

    async enroll(course_id, student_id){
    try{
      const id = generateUniqueId();
      const student = await this.pool.query(`SELECT * FROM ${USERS} WHERE id = $1`, [student_id]);
      if(student.rows.length === 0){
        throw new Error("Student does not exist");
      }
      if(student.rows[0].role === "teacher"){
        throw new Error("Only students can enroll for courses");
      }
      const result = await this.pool.query(`INSERT INTO ${ENROLLMENTS} (id, course_id, student_id) VALUES ($1, $2) RETURNING *`, [id, course_id, student_id]);
      return result.rows[0];
    }
    catch(error){
      throw error;
    }
  }

  // async getStudents(id){
  //   try{
  //     const result = await this.pool.query(`SELECT * FROM ${COURSES}_students WHERE course_id = $1`, [id]);
  //     return result.rows;
  //   }
  //   catch(error){
  //     throw error;
  //   }
  // }
}

const Enrollment = new EnrollmentModel({pool});
module.exports = Enrollment;