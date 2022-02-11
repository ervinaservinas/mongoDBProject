/*
const carDb = require("../models/carSchema")

module.exports = {
    createCar: async (req, res) => {
        const {model, year, color, power, gasolineConsumption} = req.body

        const car = new carDb()

        car.model = model
        car.year = year
        car.color = color
        car.power = power
        car.gasolineConsumption = gasolineConsumption

        await car.save()

        res.send({success: true})
    },
    getAll: async (req, res) => {
        const cars = await carDb.find({})
        res.send({success: true, cars})
    },
    getSingle: async (req, res) => {
        const {id} = req.params
        const car = await carDb.findOne({_id: id})

        res.send({success: true, car})
    },
    update: async (req, res) => {
        console.log(req.body)
        const {id, update} = req.body

        await carDb.findOneAndUpdate({_id: id}, {$set: update})

        res.send({success: true})
    },
    deleteItem: async (req, res) => {
        const {id} = req.params
        await carDb.findOneAndDelete({_id: id})
        res.send({success: true})
    },
}

*/


/*PASSWORD HASh*/
/*

const uuid = require("uuid")

let users = []
let posts = []
let allUsers = []

module.exports = {
    registerUser: (req, res) => {
        const {username, pass1} = req.body

        const findUser = users.find(x => x.username === username)
        if (findUser) return res.send({error: true, message: "username is already taken"})

        const user = {
            username,
            password: pass1,
            secret: uuid.v4()
        }
        users.push(user)
        const allUser = {
            username,
            password: pass1,
            secret: uuid.v4()
        }
        allUsers.push(allUsers)
        console.log(allUsers)
        res.send({error: false, message: "all good"})
    },
    login: (req, res) => {
        const {username, password} = req.body

        const findUser = users.find(x => x.username === username && x.password === password)
        if (findUser) {
            return res.send({error: false, message: "all good", secret: findUser.secret})
        }
        return res.send({error: true, message: "no user found"})
    },
    createPost: (req, res) => {
        const {title, description, photo, link, secret} = req.body

        const user = users.find(x => x.secret === secret)

        if (user) {
            posts.push({
                url: title.replace(/ /g, "-"),
                title,
                description,
                photo,
                link,
                username: user.username,


            })

            return res.send({error: false, message: "all good", posts})
        }

        res.send({error: true, message: "bad credentials"})
    },
    getSinglePost: (req, res) => {
        const {url} = req.params

        const post = posts.find(x => x.url === url)

        res.send({error: false, message: "all good", post})
    }
}
*/



const userDb = require("../models/userSchema")
const crypt = require("bcrypt")

module.exports = {
    register: async (req, res) => {
        const {email, password, isAdmin} = req.body

        const userExists = await userDb.findOne({email})
        if(userExists) return res.send({success: false, message: "email is taken"})

        const hash = await crypt.hash(password, 10)

        const user = new userDb()
        user.email = email
        user.password = hash
        user.admin = isAdmin
        await user.save()

        res.send({success: true, message: ""})
    },
    login: async (req, res) => {
        const {email, password} = req.body

        const userExists = await userDb.findOne({email})
        if(!userExists) return res.send({success: false, message: "bad credentials"})

        const passMatch = await crypt.compare(password, userExists.password)

        if(passMatch) {
            return res.send({success: true, message: "", user: userExists})
        }

        res.send({success: false, message: "bad credentials"})
    },
    countResult: async (req, res) => {
        const {result, bet, user} = req.body

        const userFromDb = await userDb.findOne({_id: user._id})

        if(result.number === bet.number) {
            userFromDb.money += bet.betAmount * 10
        }

        if(result.color === bet.color) {
            userFromDb.money += bet.betAmount * 2
        }

        userFromDb.money -= bet.betAmount

        const newUser = await userDb.findOneAndUpdate(
            {_id: user._id},
            {$set: {money: userFromDb.money}},
            {new: true}
        )

        res.send({success: true, message: "", user: newUser})
    },
    getUsers: async (req, res) => {
        const users = await userDb.find({}, {password: 0})
        res.send({success: true, message: "", users})
    },
    setAdmin: async (req, res) => {
        const {admin, user, updateOn} = req.body

        const findUser = await userDb.findOne({_id: user._id})

        if(findUser.admin) {
            await userDb.findOneAndUpdate({_id: updateOn}, {$set: {admin} })
            const users = await userDb.find({}, {password: 0})
            return res.send({success: true, message: "", users})

        }

        console.log(req.body)
        res.send({success: false, message: "you are not admin"})
    },
    setMoney: async (req, res) => {
        const {money, user, updateOn} = req.body
        const findUser = await userDb.findOne({_id: user._id})

        if(findUser.admin) {
            await userDb.findOneAndUpdate({_id: updateOn}, {$set: {money} })
            const users = await userDb.find({}, {password: 0})
            return res.send({success: true, message: "", users})
        }

        res.send({success: false, message: "you are not admin"})
    },
    deleteUser: async (req, res) => {
        const {user, updateOn} = req.body

        const findUser = await userDb.findOne({_id: user._id})

        if(findUser.admin) {
            await userDb.findOneAndDelete({_id: updateOn})

            const users = await userDb.find({}, {password: 0})
            return res.send({success: true, message: "", users})
        }

        res.send({success: false, message: "you are not admin"})
    }

}

