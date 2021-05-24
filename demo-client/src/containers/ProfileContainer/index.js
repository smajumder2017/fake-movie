import { useEffect, useState } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

import { saveUserAction } from "./../../redux/actions";

const ProfileContainer = (props) => {
  const [userDetails, setUserDetails] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    setUserDetails(props.profile);
  }, [props.profile]);

  const handleChange = (e, field) => {
    if (field === "fullName") {
      const name = e.target.value;
      setUserDetails({ ...userDetails, name });
      return;
    }
    if (field === "email") {
      const email = e.target.value;
      setUserDetails({ ...userDetails, email });
      return;
    }
    if (field === "phone") {
      const phone = e.target.value;
      setUserDetails({ ...userDetails, phone });
      return;
    }
    if (field === "address") {
      const address = e.target.value;
      setUserDetails({ ...userDetails, address });
      return;
    }
  };

  const handleEditCancelToggle = () => {
    setIsEdit((prev) => !prev);
    setUserDetails({ ...props.userDetails, ...userDetails });
  };

  const handleSave = async () => {
    try {
      const res = await props.saveUserAction(userDetails);
      console.log(res);
    } catch (error) {
      console.log("Error------------------------------>", error);
    }
    setIsEdit(false);
  };
  return (
    <div>
      {Object.keys(props?.profile || {}).length > 0 && (
        <Card>
          <Card.Header>
            <Row>
              <Col xs={10}>Profile</Col>
              <Col xs={2}>
                <Button
                  style={{ width: "100%" }}
                  variant="outline-primary"
                  size="sm"
                  onClick={handleEditCancelToggle}
                >
                  {!isEdit ? "Edit Profile" : "Cancel"}
                </Button>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            {!isEdit ? (
              <Row>
                <Col xs={4}>
                  <img
                    src={userDetails.image}
                    alt=""
                    height="200"
                    width="200"
                  />
                </Col>
                <Col xs={8}>
                  <div style={{ fontSize: "36px", fontWeight: "bold" }}>
                    <span>{userDetails.name}</span>
                  </div>
                  <div
                    style={{
                      fontSize: "22px",
                      color: "gray",
                      fontStyle: "italic",
                      marginTop: "10px",
                    }}
                  >
                    <span className="mr-2">
                      <i class="fas fa-envelope"></i>
                    </span>
                    {userDetails.email}
                  </div>
                  <div
                    style={{
                      fontSize: "22px",
                      color: "gray",
                      fontStyle: "italic",
                      marginTop: "5px",
                    }}
                  >
                    <span className="mr-2">
                      <i class="fas fa-phone"></i>
                    </span>
                    {userDetails.phone}
                  </div>
                  <div
                    style={{
                      fontSize: "22px",
                      color: "gray",
                      fontStyle: "italic",
                      marginTop: "5px",
                    }}
                  >
                    <span className="mr-2">
                      <i class="fas fa-location-arrow"></i>
                    </span>
                    {userDetails.address}
                  </div>
                </Col>
              </Row>
            ) : (
              <Form>
                <Form.Group controlId="formBasicFullName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Full Name"
                    value={userDetails.name}
                    onChange={(e) => handleChange(e, "fullName")}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={userDetails.email}
                    onChange={(e) => handleChange(e, "email")}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPhoneNumber">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Phone Number"
                    value={userDetails.phone}
                    onChange={(e) => handleChange(e, "phone")}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPhoneNumber">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Address"
                    value={userDetails.address}
                    onChange={(e) => handleChange(e, "address")}
                  />
                </Form.Group>

                <Button variant="primary" onClick={handleSave}>
                  Submit
                </Button>
              </Form>
            )}
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.user,
});

export default connect(mapStateToProps, { saveUserAction })(ProfileContainer);
