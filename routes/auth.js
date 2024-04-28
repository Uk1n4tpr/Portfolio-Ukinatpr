const {Router} = require("express");
const router = Router();

router.post("/homepage", require("../controlers/auth/homepage.js"))

module.exports = router;