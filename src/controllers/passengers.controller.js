import passengerService from '../services/passengers.service.js'
async function getPassengers(req, res) {
    try {
        const { page, name } = req.query
        const passengers = await passengerService.getPassengers(page, name)
        res.send(passengers)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

const controller = { getPassengers }

export default controller