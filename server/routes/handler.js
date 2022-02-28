const express = require("express");
const router = express.Router();

//handling main route
router.get('/', (req, res) =>{
    const str = [{
        "name": "Tyler",
        "msg": "This is my homepage",
        "username": "tylerflx"
    }];
    res.end(JSON.stringify(str));
});


module.exports = router;