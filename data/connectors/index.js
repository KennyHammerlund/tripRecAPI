import Sequelize from "sequelize";
import casual from "casual";
import _ from "lodash";

const db = new Sequelize("TripRec", "tripRecDB", "ICS490", {
  dialect: "mysql",
  host: "10.10.72.13",
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const tblUserModel = db.define("tblUser", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: "id"
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "(null)"
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "(null)"
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "(null)"
  },
  password: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "(null)"
  },
  displayName: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "(null)"
  },
  imageId: {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: "(null)"
  }
});

const tblImageModel = db.define("tblImage", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: "id"
  },
  title: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "(null)"
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "(null)"
  },
  date: {
    type: Sequelize.DATE,
    allowNull: true,
    defaultValue: "(null)"
  },
  userID: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "(null)"
  },
  link: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "(null)"
  },
  locationID: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "(null)"
  },
  tripID: {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: "(null)"
  },
  tripLocationID: {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: "(null)"
  },
  flagged: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    defaultValue: "(null)"
  },
  isPrimary: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    defaultValue: "(null)"
  }
});

tblUserModel.hasMany(tblImageModel);
tblImageModel.belongsTo(tblUserModel);

// seed information into the database
casual.seed(234);
db.sync({ force: true }).then(() => {
  _.times(10, () => {
    return tblUserModel.create({
      id: casual.integer,
      firstName: casual.first_name,
      lastName: casual.last_name,
      email: casual.email,
      password: casual.word,
      displayName: casual.full_name,
      imageId: casual.integer
    });
  });
});

const tblImage = db.models.tblImage;
const tblUser = db.models.tblUser;

export { tblImage, tblUser };
