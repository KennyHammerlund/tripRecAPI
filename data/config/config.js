const config = {
  username: "tripRecDB",
  password: "ICS490",
  database: "TripRec",
  options: {
    connectionTimeout: 0,
    host: "www.midnighthtml.com",
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
