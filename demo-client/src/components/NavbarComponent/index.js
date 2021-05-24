import { Navbar, Nav } from "react-bootstrap";
import { withRouter } from "react-router";

import { connect } from "react-redux";

const NavbarComponent = (props) => {
  return (
    <Navbar bg="dark" variant="dark" className="fixed">
      <Navbar.Brand href="#home">Fake Movies</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="mr-auto">
        <Nav activeKey="/">
          <Nav.Item>
            <Nav.Link onClick={() => props.history.push("/")}>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => props.history.push("/movies")}>
              Movies
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Favourites</Nav.Link>
          </Nav.Item>
        </Nav>
        <Navbar.Collapse className="justify-content-end align-items-center">
          <img
            alt=""
            src={props.profile.image}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          <Navbar.Text className="ml-2">
            <div
              style={{ cursor: "pointer" }}
              onClick={() => props.history.push("/profile")}
            >
              {props.profile.name}
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  profile: state.user,
});

export default connect(mapStateToProps, {})(withRouter(NavbarComponent));
