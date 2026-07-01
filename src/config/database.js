import { Sequelize } from "sequelize";
const sequelize = new Sequelize("movies", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export const connectDB = () => {
  sequelize
    .sync({ force: false })
    .then(() => {
      console.log("Base de datos conectada y tabla creada");
    })
    .catch((error) => {
      console.log("Error al conectar a la base de datos", error);
    });
};
export default sequelize;
