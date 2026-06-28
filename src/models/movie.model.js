import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
const Movie = sequelize.define("Movie", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allownull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allownull: false,
  },
  year: {
    type: DataTypes.INTEGER,
    allownull: false,
  },
  synopsis: {
    type: DataTypes.TEXT,
    allownull: true,
  },
});
export default Movie;
