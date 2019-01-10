const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.send("Hellow from users");
});
router.get("/other", (req, res, next) => {
    console.log("Query: ", req.query);
    res.send(`Param:  ${req.query.klinac}`);
    next();
});

router.post("/post-test", (req, res) => {
    console.lo
})

module.exports = router;

