const pool = require('../db')

const getAllLogs = async (req, res, next) => {
    try {
        const response = await pool.query("SELECT * FROM logs")
        res.json(response)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllLogs
}