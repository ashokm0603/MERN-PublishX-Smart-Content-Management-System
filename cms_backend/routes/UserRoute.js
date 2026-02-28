const {
  addUsers,
  getUser,
  getUsers,
  editUserDetails,
  loginUser
} = require("../controller/userController");
const express=require("express")
const router=express.Router()

router.post("/adduser",addUsers);
router.post("/loginuser",loginUser);
router.get("/getallusers",getUsers);
router.get("/getuser/:id",getUser);
router.put("/edituser",editUserDetails);

module.exports=router;