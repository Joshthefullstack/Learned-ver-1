require('dotenv').config();
// const schema = process.env.DB_SCHEMA || 'public';
const schema = 'public';

exports.TYPES = {
  STATUS: `${schema}.statuse`,
  LCDA: `${schema}.lcdas`
}
exports.TABLES = {
  COURSES: `${schema}.courses`,
  USERS: `${schema}.users`,
  ENROLLMENTS: `${schema}.enrollments`,
  MODULES: `${schema}.modules`
}

exports.PP_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive'
}

exports.LCDAS = [
  "igbogboBaiyeku",
  "ijede",
  "ikoroduNorth",
  "ikoroduWest",
  "imota",
];