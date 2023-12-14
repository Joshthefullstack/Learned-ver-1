const pool = require("../config/dbConfig.js");
const { MODULES, COURSES } = require("../utils/constants.js").TABLES;
const {generateUniqueId } = require("../utils/utils.js");

class LessonModule {
  constructor({pool}){
    this.pool = pool;
  }

  async create(module){
    const { title, course_id, content } = module;
    const id = generateUniqueId();
    const course = await this.pool.query(`SELECT * FROM ${COURSES} WHERE id = $1`, [course_id])
    if(course.rows.length === 0){
      throw new Error("Course does not exist");
    }
    try{
      const result = await this.pool.query(`INSERT INTO ${MODULES} (id, title, course_id, content) VALUES ($1, $2, $3, $4) RETURNING *`, [id, title, course_id, content]);
      return result.rows[0];
    }
    catch(error){
      throw error;
    }
  }

  async getAll(){
    try{
      const result = await this.pool.query(`SELECT * FROM ${MODULES}`);
      return result.rows;
    }
    catch(error){
      throw error;
    }
  }

  async getById(id){
    try{
      const result = await this.pool.query(`SELECT * FROM ${MODULES} WHERE id = $1`, [id]);
      return result.rows[0];
    }
    catch(error){
      throw error;
    }
  }

  async update(id, module){
    const { title, course_id, content } = module;
    const course = await this.pool.query(`SELECT * FROM ${COURSES} WHERE id = $1`, [course_id]);
    if(course.rows.length === 0){
      throw new Error("Course does not exist");
    }
    try{
      const result = await this.pool.query(`UPDATE ${MODULES} SET title = $1, course_id = $2, content = $3 WHERE id = $4 RETURNING *`, [title, course_id, content, id]);
      return result.rows[0];
    }
    catch(error){
      throw error;
    }
  }

  async delete(id){
    try{
      const result = await this.pool.query(`DELETE FROM ${MODULES} WHERE id = $1 RETURNING *`, [id]);
      return result.rows[0];
    }
    catch(error){
      throw error;
    }
  }
}

const Lessons = new LessonModule({pool});
module.exports = Lessons;

