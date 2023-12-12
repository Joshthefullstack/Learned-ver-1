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
    if(!instructor){
      throw new Error("Instructor does not exist");
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
}