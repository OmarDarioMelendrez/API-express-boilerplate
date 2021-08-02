const router = require('express').Router()

const UserRoutes = require('./users');

router.get("/", (req,res,next) => {
    res.send("This is the home.")
})
router.use("/users", UserRoutes)

module.exports = router