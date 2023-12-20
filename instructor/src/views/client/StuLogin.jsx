import React from "react";
import sign_up from "../../assets/sign up.png";
import style from "../../styles/StuLogin.module.css";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import LoginPage from "../../views/LoginPage";

const StuLogin = ({
  setAction,
  showInstructorLogin,
  setShowLandingPage,
  setShowInstructorLogin,
  user,
}) => {
  return (
    <div>
      {user ? (
        ""
      ) : (
        <div>
          {showInstructorLogin ? (
            <LoginPage
              setShowLandingPage={setShowLandingPage}
              setShowInstructorLogin={setShowInstructorLogin}
            />
          ) : (
            <div className={style.container}>
              <div>
                <div className="header-flex">
                  <h1>Create Account</h1>
                  <Button
                    variant="danger"
                    onClick={() => {
                      setAction("home");
                    }}
                  >
                    Back
                  </Button>
                </div>

                <Form>
                  <Row className="mb-3">
                    <Form.Group controlId="formGridName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      className="mt-2"
                      controlId="formGridEmail"
                    >
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      className="mt-2"
                      controlId="formGridPassword"
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter password"
                      />
                    </Form.Group>
                  </Row>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
              <img src={sign_up} alt="" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StuLogin;
