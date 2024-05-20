const { Router } = require("express")
const { getAll } = require("../controllers/pokemon.controller")
const router = Router()

router.get("/",getAll)

module.exports = router
