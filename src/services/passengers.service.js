import passengersRepository from '../repositories/passengers.repository.js'

async function getPassengers(page, name) {
    const OFFSET = isNaN(page) ? Number(0) : (Number(page) * 25)
    const passengers = await passengersRepository.getPassengers(OFFSET, name)
    return passengers.rows
}

const services = { getPassengers }

export default services

