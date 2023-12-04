const pool = require("./config/dbConfig");
const process = require("node:process");
const {TYPES, TABLES} = require("./utils/constants");
const logger = require("./utils/logger");


const createTables = async () => {
  logger.info("Creating tables... in schema", process.env.DB_SCHEMA);
  try {

    await pool.query(`CREATE TABLE IF NOT EXISTS ${TABLES.USERS}(
      id TEXT PRIMARY KEY,
      username TEXT NOT NULL UNIQUE,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      role VARCHAR(20) NOT NULL
    )`);
  logger.info("Users table created successfully");

    await pool.query(`CREATE TABLE IF NOT EXISTS ${TABLES.COURSES}(
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL UNIQUE,
        description TEXT NOT NULL,
        instructor_id INT REFERENCES ${TABLES.USERS}(id)
      )`);
    logger.info("Courses table created successfully");

    await pool.query(`CREATE TABLE IF NOT EXISTS ${TABLES.ENROLLMENTS}(
      id TEXT PRIMARY KEY,
      student_id INT REFERENCES ${TABLES.USERS}(id),
      course_id INT REFERENCES ${TABLES.COURSES}(id),
    )`);
  logger.info("Enrollments table created successfully");

  await pool.query(`CREATE TABLE IF NOT EXISTS ${TABLES.MODULES}(
    id TEXT PRIMARY KEY,
    course_id INT REFERENCES ${TABLES.COURSES}(id),
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL
  )`);
logger.info("Courses table created successfully");

    logger.info("Tables created successfully");
  } catch (error) {
    console.log(error);
    // logger.error(error);
  }
};

// const dropTables = async () => {
//   try {
//     await pool.query(`DROP TABLE IF EXISTS ${TABLES.ROUTE_SCHEDULE}`);
//     logger.info("Route schedule table dropped successfully");
//     await pool.query(`DROP TABLE IF EXISTS ${TABLES.ROUTE_PICKUP_POINT}`);
//     logger.info("Route pickup point table dropped successfully");
//     await pool.query(`DROP TABLE IF EXISTS ${TABLES.ROUTE}`);
//     logger.info("Route table dropped successfully");
//     await pool.query(`DROP TABLE IF EXISTS ${TABLES.PICKUP_POINT}`);
//     logger.info("Pickup point table dropped successfully");
//     await pool.query(`DROP TABLE IF EXISTS ${TABLES.LOCATION}`);
//     logger.info("Location table dropped successfully");
//     await pool.query(`DROP TYPE IF EXISTS ${TYPES.LCDA}`);
//     logger.info("LCDA type dropped successfully");
//     await pool.query(`DROP TYPE IF EXISTS ${TYPES.STATUS}`);
//     logger.info("Status type dropped successfully");
//     logger.info("Tables dropped successfully");
//   } catch (error) {
//     console.log(error);
//   }
// };

const syncDatabase = async () => {
  const command = process.argv[2];
  if (command === "up") {
    await createTables();
    process.exit();
  } else if (command === "down") {
    await dropTables();
    process.exit();
  }
};

syncDatabase();
