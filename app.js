/*
/!*
/!*
/!*
/!*
/!*
/!*
const axios = require('axios')

axios.get('https://randomuser.me/api').then(res=>{
    console.log(res.data)
})

// create module which will return user object when
// called (use axios to get user from api)
// picture, age, email, city, post code, first and last name
// create one more module for email validation
// when user is returned, validate his email*!/


function myPromise(){
    return new Promise(async (resolve, reject)=>{
        const data = await axios.get("https://api.chucknorris.io/jokes/random")
    if (data.status === 200) {
        return resolve(data.data)
    } else {
        return reject({success: false})
    }
    })

}
console.log(data.data)
myPromise().then(res => {
    console.log(res)
}).catch(e => {
    console.log(e)

})

async function prom(){
    let data

    try {
        data = await myPromise(num)
    }
    catch (error){
        console.log(error)
    }
    console.log(data)
}
myPromise()


// using async/await, and axios module,
// fetch data from: https://randomuser.me/api/

function myPromise(){
    return new Promise(async (resolve, reject)=>{
        const data = await axios.get("https://randomuser.me/api/")
        if (data.status === 200) {
            return resolve(data.data)
        } else {
            return reject({success: false})
        }
    })

}
const axios = require('axios')

axios.get('https://randomuser.me/api').then(res=>{
    console.log(res.data)
})

async function*!/

// get all posts from api "http://167.99.138.67:1111/getallposts"//
// take random post from posts array, get its username and get that user posts from api "http://167.99.138.67:1111/getuserposts/:username"// when you received all user posts, take random post from array, and get this particular post data from api "http://167.99.138.67:1111/getsinglepost/:username/:postId"



const axios =require("axios")
async function getData(){

    const {data} =await axios.get("http://167.99.138.67:1111/getallposts")
const {data1} = await axios.get ("http://167.99.138.67:1111/getallposts/:username")

    console.log(data)
    console.log(data1)
}
getData()
*!/

 const express = require("express")
const app = express()
app.listen(4000)
console.log("asdasdasasdasd1515")

const {domain, number} =req.params

const domanin = req.params.domain
const number = req.params.number
req.params.domain

app.get("/username",(req,res) => {
    res.send({success: true})
})
    app.get("info",(req, res)  => {
         res.send({ok:"asd"})
    }
    )*!/

const whoiser = require('whoiser')
const express = require("express")
const app = express ()
app.listen(4000)

app.get("/check/:domain",async (req,res)=>{
    const domainName = req.params.domain
    const info = await whoiser(domainName)
    res.send({info})



})
*!/
const randomName = require('./modules/randomName')
const randomPhoto = require('./modules/randomPhoto')
const randomCity = require('./modules/randomCity')

const cors = require('cors')
const express = require("express")
const app = express()

app.use(cors())
app.listen(4000)


app.get("/users/:number", async (req, res) => {
    const usersAmount = Number( req.params.number)
    const users = []
    for (let i = 0; i < usersAmount; i++) {
        const user = {
            username: randomName(),
            photo: randomPhoto(),
            city: randomCity()
        }
        users.push(user)
    }

    res.send({users})
})


const registerUsers = []

app.post("/regiser", (req, res) => {
    const data = req.body
    // MAKE VALIDATIONS HERE
    // SEND ERROR OR SEND SUCCESS TRUE TO FRONT END

})







const cors = require('cors')
const express = require("express")
const app = express()

const validateEmail = require('email-validator')
const e = require("express");

app.use(cors())
app.use(express.json())
app.listen(3001)

let registerUsers = []

app.post("/register", (req, res) => {
    const {email, passOne, passTwo} = req.body

    if(validateEmail.validate(email) && passOne === passTwo) {
        registerUsers.push({
            email,
            password: passOne

        })

        res.send({error: false, message: "All good"})
    } else {
        res.send({error: true, message: "Bad credentials"})
    }
})


app.post("/login", (req, res) => {
    const {email, password} = req.body
    const user = registerUsers.find(x => x.email === email && x.password === password)

    if(user) {
        res.send({error: false, message: "All good, user was found", user})
    } else {
        res.send({error: true, message: "user was not found"})
    }
})

app.post("/delete", (req, res) => {
    const {email} = req.body

    registerUsers = registerUsers.filter(x => x.email !== email)

    res.send({error: false, message: "all good", data: registerUsers})
})









const express = require("express")
const express = require("express")
const router = express.Router

const middle  = require("../middleware/main")
const {getInfo} = require("../controllers/main")

router.get("/info/:email",middle.validateEmail,getInfo)

module.exports = router

*!/
*/

const cors = require('cors')
const express = require("express")
const app = express()
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())
app.listen(4000)


mongoose.connect("mongodb+srv://admin:ervinas@cluster0.is4uj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then(res => {
        console.log("connection good")
    }).catch(e => {
    console.log(e)
})


const router = require("./routes/main")
app.use("/", router)






