import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
function LandingPageBody() {
  return (
    <div id="landPage-container">
      <Card>
        <Card.Header className="text-center" as="h5">
            <h2>Welcome to My Blog</h2>
        </Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
         <div id="button-container">
             <Button variant="primary">
              <Link to="/signin">Sign-In</Link>
             </Button>
             <Button variant="warning mx-3">
              
              <Link to="/signup">Sign-Up</Link>
              </Button>
         </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LandingPageBody;
