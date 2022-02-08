const express = require('express')
const router = express.Router()
// const middle = require("../middleware/main")

const {createCar, getAll, getSingle, update, deleteItem} = require("../controllers/main")


router.post("/create", createCar)
router.post("/update", update)

router.get("/getAll", getAll)
router.get("/delete/:id", deleteItem)

router.get("/getSingle/:id", getSingle)


module.exports = router