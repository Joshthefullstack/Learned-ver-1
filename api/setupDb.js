const pool = require("./config/dbConfig");
const process = require("node:process");
const {TYPES, TABLES} = require("./utils/constants");
// const logger = require("./utils/logger");


const createTables = async () => {
  console.log("Creating tables... in schema", process.env.DB_SCHEMA);
  try {

    await pool.query(`CREATE TABLE IF NOT EXISTS ${TABLES.USERS}(
      id TEXT PRIMARY KEY,
      username TEXT NOT NULL UNIQUE,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      role VARCHAR(20) NOT NULL
    )`);
  console.log("Users table created successfully");

    await pool.query(`CREATE TABLE IF NOT EXISTS ${TABLES.COURSES}(
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL UNIQUE,
        description TEXT NOT NULL,
        instructor_id TEXT REFERENCES ${TABLES.USERS}(id)
      )`);
    console.log("Courses table created successfully");

    await pool.query(`CREATE TABLE IF NOT EXISTS ${TABLES.ENROLLMENTS}(
      id TEXT PRIMARY KEY,
      student_id TEXT REFERENCES ${TABLES.USERS}(id),
      course_id TEXT REFERENCES ${TABLES.COURSES}(id)
    )`);
  console.log("Enrollments table created successfully");

  await pool.query(`CREATE TABLE IF NOT EXISTS ${TABLES.MODULES}(
    id TEXT PRIMARY KEY,
    course_id TEXT REFERENCES ${TABLES.COURSES}(id),
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL
  )`);
console.log("Courses table created successfully");

    console.log("Tables created successfully");
  } catch (error) {
    console.log(error);
    // logger.error(error);
  }
};

const dropTables = async () => {
  try {
    await pool.query(`DROP TABLE IF EXISTS ${TABLES.USERS}`);
    console.log("Users schedule table dropped successfully");
    await pool.query(`DROP TABLE IF EXISTS ${TABLES.ROUTE_COURSES}`);
    console.log("Courses table dropped successfully");
    await pool.query(`DROP TABLE IF EXISTS ${TABLES.ENROLLMENTS}`);
    console.log("Enrollments table dropped successfully");
    await pool.query(`DROP TABLE IF EXISTS ${TABLES.MODULES}`);
    console.log("Modules table dropped successfully");
    console.log("Tables dropped successfully");
  } catch (error) {
    console.log(error);
  }
};

// dropTables();
createTables();

// const syncDatabase = async () => {
//   const command = process.argv[2];
//   if (command === "up") {
//     await createTables();
//     process.exit();
//   } else if (command === "down") {
//     await dropTables();
//     process.exit();
//   }
// };

// syncDatabase();
