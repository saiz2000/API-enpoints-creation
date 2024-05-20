const { Router } = require("express")
const { getAll } = require("../controllers/starwars.controller")
const router = Router()

router.get("/",getAll)

module.exports = router
