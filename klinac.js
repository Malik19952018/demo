const router=require("express").Router();
const {list,list2,list3,funkcija}=require("./userlist");
console.log(router);
console.log(funkcija.toString())

router.get("/", (req, res, next) => {
    res.send({list2,list3,fu: funkcija()});
});

module.exports = router;
