const { Router } = require("express")
const { getAll } = require("../controllers/rickymorty.controller")
const router = Router()

router.get("/",getAll)

module.exports = router
