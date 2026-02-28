const Post = require("../model/PostModel");

// add post controller
const addPost = async (req, res) => {
  try {
    const newPost = {
      title: req.body.title,
      author: req.body.author,
      content: req.body.content,
      tags: req.body.tags,
      imageSrc: req.body.imageSrc,
    };
    await Post.insertOne(newPost);

    res.status(200).json({ message: "post inserted Successfully" });
  } catch (error) {
    res.status(500).json({ message: "failed  insert post  details " });
  }
};

// edit post controller
const editPostDetails = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        tags: req.body.tags,
        imageSrc: req.body.imageSrc,
      },
      { new: true },
    );

    if (!updatedPost) {
      res
        .status(404)
        .json({ message: "post details not found please check post ID" });
    }
    res.status(200).json({ message: "post details updated..", updatedPost });
  } catch (err) {
    res.status(500).json({ message: "failed  insert post  details " });
  }
};

// edit post title

const editTitle = async (req, res) => {
  try {
    const updatedTitle = await Post.findByIdAndUpdate(
      req.params.post_id,
      {
        title: req.body.title,
      },
      { new: true },
    );
    if (!updatedTitle) {
      res
        .status(404)
        .json({ message: "post Title not found please check post ID" });
    }
    res.status(200).json({ message: "post title updated..", updatedTitle });
  } catch (error) {
    res.status(500).json({ message: "failed to update title" });
  }
};
// view all post controller

const getAllPosts = async (req, res) => {
  try {
    const allPostDetails = await Post.find();

    if (!allPostDetails) {
      res.status(404).json({ message: "post details not found" });
    }

    res.status(200).json({ allPostDetails });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch post details" });
  }
};

// delete post controller

const deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.deleteOne({ _id: req.params.id });
    if (!deletedPost) {
      res.status(404).json({ message: "post details not found" });
    }
    res.status(200).json({ message: "deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "failed to delete post " });
  }
};

module.exports = {
  addPost,
  editPostDetails,
  getAllPosts,
  editTitle,
  deletePost,
};
