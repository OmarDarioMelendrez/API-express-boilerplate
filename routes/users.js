const router = require('express').Router()

const {UsersGetAll} = require('../controllers/usersControllers');

router.get("/", UsersGetAll)

module.exports = router