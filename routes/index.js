const {Router} = require("express");
const router = Router();

router.get("/", (req, res) => {
    res.render("homepage")
})

router.use("/auth", require("./auth"));

module.exports = router;