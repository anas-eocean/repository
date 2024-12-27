const express = require("express")
const router = express.Router();
const modal=require("../modals/modal")
const  {getcontroller,getcontrollerid,postcontroller,putcontroller,deletecontroller }  = require("../controller/controller.js")






router.get("/",getcontroller);
router.get("/:id",getcontrollerid)
router.post("/",postcontroller )
router.put("/:id",putcontroller)
router.delete("/:id",deletecontroller)


module.exports =router;