/*
const express = require('express')
const router = express.Router()
// const middle = require("../middleware/main")

const {createCar, getAll, getSingle, update, deleteItem} = require("../controllers/main")


router.post("/create", createCar)
router.post("/update", update)

router.get("/getAll", getAll)
router.get("/delete/:id", deleteItem)

router.get("/getSingle/:id", getSingle)


module.exports = router*/


/*PASSWORD HASH*/

/*
const express = require('express')
const router = express.Router()

const middle = require("../middleware/main")
const {registerUser, login, createPost, getSinglePost} = require("../controllers/main")


router.post("/register", middle.validateUser, registerUser)
router.post("/login", login)
router.post("/createpost", middle.validatePost, createPost)
router.get("/single/:url", getSinglePost)



module.exports = router*/
const express = require('express')
const router = express.Router()
const middle = require("../middleware/main")

const {
    register,
    login,
    countResult,
    getUsers,
    setAdmin,
    setMoney,
    deleteUser
} = require("../controllers/main")

router.post("/register", middle.validateUser, register)
router.post("/login", login)

router.post("/result", countResult)

router.get("/getUsers", getUsers)

router.post("/setAdmin", setAdmin)
router.post("/setMoney", setMoney)

router.post("/deleteUser", deleteUser)



module.exports = router