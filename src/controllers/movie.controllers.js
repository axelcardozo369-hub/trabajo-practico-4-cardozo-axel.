import Movie from "../models/movie.model.js";
export const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las películas" });
  }
};

export const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: "Película no encontrada" });
    }
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la película" });
  }
};
export const createMovie = async (req, res) => {
  try {
    const { title, genre, duration, year, synopsis } = req.body;

    if (!title || !genre || !duration || !year) {
      return res
        .status(400)
        .json({
          error:
            "Los campos title, genre, duration y year tiene que ser obligatorios",
        });
    }

    if (!Number.isInteger(duration) || duration <= 0) {
      return res
        .status(400)
        .json({ error: "La duración debe ser un número entero mayor a cero" });
    }

    const currentYear = new Date().getFullYear();
    if (!Number.isInteger(year) || year < 1888 || year > currentYear) {
      return res
        .status(400)
        .json({
          error: `El año debe ser un número entero entre 1888 y ${currentYear}`,
        });
    }

    if (synopsis !== undefined && typeof synopsis !== "string") {
      return res
        .status(400)
        .json({ error: "La sinopsis debe ser una cadena de texto" });
    }

    const existingMovie = await Movie.findOne({ where: { title } });
    if (existingMovie) {
      return res
        .status(400)
        .json({ error: "Ya existe una película con ese título" });
    }

    const movie = await Movie.create({
      title,
      genre,
      duration,
      year,
      synopsis,
    });
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la película" });
  }
};

export const updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: "Película no encontrada" });
    }

    const { title, genre, duration, year, synopsis } = req.body;

    if (!title || !genre || !duration || !year) {
      return res
        .status(400)
        .json({
          error: "Los campos title, genre, duration y year son obligatorios",
        });
    }

    if (!Number.isInteger(duration) || duration <= 0) {
      return res
        .status(400)
        .json({ error: "La duración debe ser un número entero mayor a cero" });
    }

    const currentYear = new Date().getFullYear();
    if (!Number.isInteger(year) || year < 1888 || year > currentYear) {
      return res
        .status(400)
        .json({
          error: `El año debe ser un número entero entre 1888 y ${currentYear}`,
        });
    }

    if (synopsis !== undefined && typeof synopsis !== "string") {
      return res
        .status(400)
        .json({ error: "La sinopsis debe ser una cadena de texto" });
    }

    const existingMovie = await Movie.findOne({ where: { title } });
    if (existingMovie && existingMovie.id !== movie.id) {
      return res
        .status(400)
        .json({ error: "Ya existe una película con ese título" });
    }

    await movie.update({ title, genre, duration, year, synopsis });
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la película" });
  }
};

export const deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: "Película no encontrada" });
    }
    await movie.destroy();
    res.status(200).json({ message: "Película eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la película" });
  }
};
