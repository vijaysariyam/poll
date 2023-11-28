const express = require("express");
const controller = require("../controllers/voters.controller.js");
const router = express.Router();
router.get("/voters/getall", controller.getAll);
router.get("/voters/:id", controller.getById);
router.post("/voters/", controller.create);
router.put("/voters/:id", controller.updateById);
router.delete("/voters/:id", controller.deletedById);

module.exports = router;