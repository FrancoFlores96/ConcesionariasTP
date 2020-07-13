const express = require("express");
const router = express.Router();
const app = express()

const autosController = require("../controller/autosController")

router.get("/", autosController.index);
router.get("/:id", autosController.marca);
router.get('/:id/:id', autosController.datos)

module.exports = router