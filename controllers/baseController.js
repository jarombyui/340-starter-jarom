const utilities = require("../utilities/")
const invModel = require("../models/inventory-model")
const baseController = {}

baseController.buildHome = async function(req, res){
  const nav = await utilities.getNav()
  res.render("index", {title: "Home", nav})
}

/* ***************************
 *  Test getting single classification
 * ************************** */
baseController.testSingleClassification = async function(req, res){
  const classification_id = 1 // You can change this to test different IDs
  const data = await invModel.getClassificationById(classification_id)
  console.log("Single classification data:", data)
  console.log("Single classification row:", data.rows[0])
  res.send(data.rows[0] || "No classification found")
}

module.exports = baseController