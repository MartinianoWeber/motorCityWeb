const {
    Router
} = require('express')

const {
    getAllLogs
} = require('../controllers/logs.controller')

const router = Router()

router.get('/logs', getAllLogs)

module.exports = router