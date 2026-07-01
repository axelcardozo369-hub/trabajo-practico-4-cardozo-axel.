import express from "express";
import sequelize from "./src/config/database.js";
import movieRoutes from "./src/routes/movie.routes.js";

const app = express();
app.use(express.json());
app.use("/api/movies", movieRoutes);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Base de datos conectada y tabla creada");
  })
  .catch((error) => {
    console.log("Error al poder conectar a la base de datos", error);
  });
app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
