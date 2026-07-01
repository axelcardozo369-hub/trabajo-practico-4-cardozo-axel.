import express from "express";
import sequelize, { connectDB } from "./src/config/database.js";
import movieRoutes from "./src/routes/movie.routes.js";

const app = express();
app.use(express.json());
app.use("/api/movies", movieRoutes);

connectDB();

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
