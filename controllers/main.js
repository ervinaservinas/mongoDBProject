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

