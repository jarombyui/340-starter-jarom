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
const baseController = require("./controllers/baseController");
const utilities = require("./utilities");
const inventoryRoute = require("./routes/inventoryRoute");

/* ***********************
 * View Engine and Templates
 *************************/
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(expressLayouts);
app.set("layout", "layouts/layout");

/* ***********************
 * Middleware para archivos estáticos
 *************************/
app.use(express.static("public"));

/* ***********************
 * Routes
 *************************/
app.use(static);

// Inventory routes
app.use("/inv", inventoryRoute);

// Ruta principal
app.get("/", baseController.buildHome);

// Ruta para probar obtención de una única clasificación
app.get("/test-classification", baseController.testSingleClassification);

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT || 5500;
const host = process.env.HOST || "localhost";

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`App listening on ${host}:${port}`);
});

