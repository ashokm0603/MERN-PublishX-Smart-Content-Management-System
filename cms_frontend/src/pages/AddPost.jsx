import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import AdminPageNav from "../components/AdminPageNav";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function AddPost() {
  const [postDetails, setPostDetails] = useState({
    title: "",
    author: "",
    content: "",
    tags: [],
    imageSrc: "",
  });

  const handleChange = (e) => {
    setPostDetails({ ...postDetails, [e.target.name]: e.target.value });
    // console.log(postDetails.title);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "http://localhost:5000/api/addpost",
        postDetails,
      );
      console.log(postDetails);
      console.log(response.data);
      toast.success("Post Added Successfully");
      setPostDetails({
        title: "",
        author: "",
        content: "",
        tags: [],
        imageSrc: "",
      });
    } catch (err) {
      console.log(err);
      toast.error("Failed to Add Post");
    }
  };

  return (
    <>
      <AdminPageNav />
      <h1 className="text-center ">Add Post </h1>
      <div className="add-post-container">
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                value={postDetails.title}
                onChange={handleChange}
                type="text"
                placeholder="Enter Post Title"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Author</Form.Label>
              <Form.Control
                name="author"
                value={postDetails.author}
                onChange={handleChange}
                type="text"
                placeholder="Enter author name"
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              value={postDetails.content}
              rows={3}
              name="content"
              onChange={handleChange}
              placeholder="add description"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Tags</Form.Label>
            <Form.Control
              name="tags"
              value={postDetails.tags}
              onChange={handleChange}
              placeholder="Enter Tags to tag persons"
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Image Src</Form.Label>
              <Form.Control
                name="imageSrc"
                onChange={handleChange}
                type="url"
                value={postDetails.imageSrc}
                placeholder="https://...."
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button className="mx-2" variant="warning" type="reset">
            Reset
          </Button>
        </Form>
      </div>
      <ToastContainer/>
    </>
  );
}

export default AddPost;
