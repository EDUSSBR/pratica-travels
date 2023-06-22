import db from '../database/database.js'

async function getPassengers(OFFSET, name) {
    console.log(OFFSET, name)
    return await db.query(`
SELECT p."fullName", COUNT(pt."passengerId")  from passenger_travels pt 
JOIN passengers p on p.id=pt."passengerId" 
JOIN travels t on t.id=pt."travelId"
WHERE p."fullName" ILIKE COALESCE('%'||$2||'%', '%')
GROUP BY p."fullName", pt."passengerId"
LIMIT 25
OFFSET $1
; 
    `, [OFFSET, name])
}

const repository = { getPassengers }
export default repository;
