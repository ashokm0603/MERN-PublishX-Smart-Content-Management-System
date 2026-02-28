/* eslint-disable no-unused-vars */
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import LandingPageNav from "../components/LandingPageNav";
import { useState } from "react";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    try {
      e.preventDefault();

      const response = await axios.post(
        "http://localhost:5000/api/loginuser",
        loginDetails,
      );
      toast.success("Login Successfully 😊");
      setTimeout(() => {
        navigate("/admin-dashboard");
      }, 4000);
      setLoginDetails({
        email: "",
        password: "",
      });
    } catch (err) {
      toast.error("Failed to Login");
    }
  };

  return (
    <div>
      <LandingPageNav />

      <div id="form-container">
        <Form id="form" onSubmit={handleLoginSubmit}>
          <h1>Login </h1>

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
              placeholder="Enter Password"
            />
          </Form.Group>

          <br />
          <br />
          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <div id="button-container">
            <Button variant="primary" type="submit">
              Sign In
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

export default LoginPage;
