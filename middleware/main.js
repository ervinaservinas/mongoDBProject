const valid = require("email-validator")

module.exports = {
    validateEmail: (req, res, next) => {
        const {email} = req.params

        if (valid.validate(email)) {
            next()
        } else {
            res.send({error: "email is not valid"})
        }
    },
    validateUser: (req, res, next) => {
        const {username, pass1, pass2} = req.body

        if(username.length > 20 || username.length < 3 || username !== username.toUpperCase() ) {
            return res.send({error: true, message: "bad username"})
        }

        if(pass1 !== pass1 || pass1.length > 20 || pass1 < 3) {
            return res.send({error: true, message: "bad password"})
        }

        next()
    },
    validatePost: (req, res, next) => {
        const {title, description} = req.body

        if (title.length > 20 || title.length < 3) {
            return res.send({error: true, message: "bad title length"})
        }
        if (description.length > 30 || description.length < 5) {
            return res.send({error: true, message: "bad description length"})
        }

        next()
    }
}


