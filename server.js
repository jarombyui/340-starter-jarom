/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const env = require("dotenv").config();
const app = express();
const static = require("./routes/static");

/* ***********************
 * View Engine and Templates
 *************************/
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(expressLayouts); // Mueve esto antes de `app.set("layout", ...)`
app.set("layout", "layouts/layout"); // Usa la carpeta layouts dentro de views

/* ***********************
 * Middleware para archivos estáticos
 *************************/
app.use(express.static("public"));

/* ***********************
 * Routes
 *************************/
app.use(static);

// Ruta principal (restaurada para usar layout correctamente)
app.get("/", function (req, res) {
  console.log("Rendering index.ejs with layout");
  res.render("index", { title: "Home" });
});

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT || 5500; // Agrega un valor por defecto si .env no lo tiene
const host = process.env.HOST || "localhost";

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`App listening on ${host}:${port}`);
});
