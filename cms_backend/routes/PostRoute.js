const {
  addPost,
  editPostDetails,
  getAllPosts,
  editTitle,
  deletePost,
} = require("../controller/postController");


const express=require("express");
const router=express.Router();
router.post("/addpost",addPost);
router.get("/getallposts",getAllPosts);
router.delete("/deletepost/:id",deletePost);
router.put("/updatepost/:id", editPostDetails)
router.patch("/updatetitle/:post_id", editTitle)


module.exports=router