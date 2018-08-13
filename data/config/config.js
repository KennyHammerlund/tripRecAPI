import sqlFormatter from "sql-formatter";

// const isDebug = true;

const isDebug = (() => {
  if (process.env && process.env.npm_config_argv) {
    const { original } = JSON.parse(process.env.npm_config_argv);
    return original == "dev";
  } else {
    return false;
  }
})();

const logging = query => {
  if (!isDebug) {
    const tables = query.match(/tbl\w+/g);
    console.groupCollapsed(`QUERY::${tables ? tables[0] : "Query"}`); // eslint-disable-line no-console
    console.log(sqlFormatter.format(query)); // eslint-disable-line no-console
    console.groupEnd(); // eslint-disable-line no-console
  }
};

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
    },
    logging
  }
};

module.exports = config;
