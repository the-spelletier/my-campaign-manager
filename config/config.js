require('dotenv').config();

const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

console.log("DB_HOST", DB_HOST, "DB_USERNAME", DB_USERNAME, "DB_PASSWORD", DB_PASSWORD, "DB_NAME", DB_NAME);

module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "database_development",
    "host": DB_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "database_test",
    "host": DB_HOST,
    "dialect": "postgres"
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME || "database_production",
    "host": DB_HOST,
    "dialect": "postgres",
    "dialectOptions": {
        "ssl": {
            "rejectUnauthorized": false
        }
    }
  }
}
