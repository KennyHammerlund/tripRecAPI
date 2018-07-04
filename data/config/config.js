const config = {
  username: "tripRecDB",
  password: "ICS490",
  database: "TripRec",
  options: {
    connectionTimeout: 0,
    host: "10.10.72.13",
    dialect: "mysql",
    port: "3306",
    pool: {
      max: 5,
      min: 0,
      acquire: 60000,
      idle: 10000
    }
  }
};
module.exports = config;
