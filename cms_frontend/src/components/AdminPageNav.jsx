import Container from "react-bootstrap/Container";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function AdminPageNav() {
  return (
    <Navbar id="nav-container" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            style={{ height: "60px", width: "60px", borderRadius: "50%" }}
            src="https://c8.alamy.com/compfr/dnp0df/le-logo-de-votre-blog-bulle-blogger-bloggers-blogging-website-dnp0df.jpg"
            alt=""
          />
          <h3>Ayan's Blogs </h3>
        </Navbar.Brand>

         <Navbar.Collapse id="basic-navbar-nav"  >
          <Nav className="me-auto">
            <Nav.Link href="/admin-dashboard">Home</Nav.Link>
            <Nav.Link href="/add-post">Add Post</Nav.Link>
            <Nav.Link href="/view-posts">View Post Details</Nav.Link>
            <NavDropdown title="Operations" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Edit Post </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Delete Post
              </NavDropdown.Item>
              <NavDropdown.Item href="update-posts">Update Post Details</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">
                Update Title
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>


        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <div className="btn btn-primary">
              <a href="/signin">
                Sign-Out{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-box-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                  />
                </svg>
              </a>
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminPageNav;
