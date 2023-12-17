const pool = require("../config/dbConfig.js");
const { COURSES, USERS } = require("../utils/constants.js").TABLES;
const {generateUniqueId } = require("../utils/utils.js");


class CourseModel{
  constructor({pool}){
    this.pool = pool;
  }

    /**
   * Create a new course
   * @param {CourseObj} course
   * @returns {Promise<CourseObjDto>}
   * @throws {Error}
   */
 async create(course) {
    let { title, description, instructor_id } = course;
    const id = generateUniqueId();
    const instructor = await this.pool.query(`SELECT * FROM ${USERS} WHERE id = $1`, [instructor_id]);
    // console.log(instructor);
    if(instructor.rows.length === 0){
      throw new Error("Instructor does not exist");
    }

    if(instructor.rows[0].role === "student"){
      throw new Error("Only teachers can create courses");
    }
    try {
      const result = await this.pool.query(
        `INSERT INTO ${COURSES} ( id, title, description, instructor_id ) VALUES ($1, $2, $3, $4) RETURNING *`,
        [id, title, description, instructor_id]
      );
      return result.rows[0];
    } catch (error) {
      throw error;
    }
    }

    async delete (id){
      try{
        const result = await this.pool.query(`DELETE FROM ${COURSES} WHERE id = $1 RETURNING *`, [id]);
        return result.rows[0];
      }
      catch(error){
        if(error.code === '23503'){
          // console.log(error)
          throw new Error("Course is currently in use by a lesson.");
        }
        throw error;
      }
    }

  async getAll() {
    try {
      const result = await this.pool.query(`SELECT * FROM ${COURSES}`);
      return result.rows;
    } catch (error) {
      throw error;
    }
  }

  async getById(id){
    try{
      const result = await this.pool.query(`SELECT * FROM ${COURSES} WHERE id = $1`, [id]);
      return result.rows[0];
    }
    catch(error){
      throw error;
    }
  }

  async update(id, course){
    try{
      const { title, description, instructor_id } = course;
      const result = await this.pool.query(`UPDATE ${COURSES} SET title = $1, description = $2, instructor_id = $3 WHERE id = $4 RETURNING *`, [title, description, instructor_id, id]);
      return result.rows[0];
    }
    catch(error){
      throw error;
    }
  }

}

const Course = new CourseModel({pool});
module.exports = Course;