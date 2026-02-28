/* eslint-disable no-unused-vars */
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import LandingPageNav from "../components/LandingPageNav";
import { useState } from "react";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [registerDetails, setRegisterDetails] = useState({
    name: "",
    phone: "",
    password: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setRegisterDetails({ ...registerDetails, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/adduser",
        registerDetails,
      );

      toast.success("Register Successfully 😊");
      console.log(response.data.message);

      setRegisterDetails({
        name: "",
        phone: "",
        password: "",
        email: "",
      });

      setTimeout(() => {
        navigate("/signin");
      }, 3000);
    } catch (error) {
      console.log(error);
      toast.error("Failed To Register 😥");
    }

    console.log(registerDetails);
  };

  return (
    <div>
      <LandingPageNav />

      <div id="form-container">
        <Form id="form" onSubmit={handleRegisterSubmit}>
          <h1>Register </h1>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              onChange={handleChange}
              type="text"
              placeholder="Enter Your Full Name"
            />
          </Form.Group>
          <br />

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="Enter Your email"
            />
          </Form.Group>
          <br />

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Phone </Form.Label>
            <Form.Control
              name="phone"
              onChange={handleChange}
              type="tel"
              placeholder="+91"
            />
          </Form.Group>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <div id="button-container">
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button className="mx-3" variant="warning" type="reset">
              Cancel
            </Button>
          </div>
        </Form>
      </div>

      <ToastContainer />
    </div>
  );
}

export default RegisterPage;
