import { Sequelize } from "sequelize";
<<<<<<< HEAD
const sequelize = new sequelize(`movies`, `root`, ``, {
  host: "localhost",
  dialect: "mysql",
});
=======
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
>>>>>>> feature/crud-peliculas
export default sequelize;
