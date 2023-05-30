import React, { useState } from "react";
import { Link } from "react-router-dom";
import signupImage from "../../assets/signup.png";
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Image, Col, Row, Container } from "react-bootstrap";
import axios from "axios";

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    pw1: "",
    pw2: "",
  });
  const { username, pw1, pw2 } = signUpData;

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
    } catch (err) {}
  };

  return (
    <Row className={styles.Row}>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
        <Image className={`${appStyles.FillerImage}`} src={signupImage} />
      </Col>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign up</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label className="d-none">Username:</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Choose your username"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label className="d-none">Password:</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Choose a password"
                name="pw1"
                value={pw1}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label className="d-none">Confirm Password:</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Confirm your password"
                name="pw2"
                value={pw2}
                onChange={handleChange}
              />
            </Form.Group>
            <Button
              className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Dull}`}
              variant="primary"
              type="submit"
            >
              Sign Up
            </Button>
          </Form>
        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
    </Row>
  );
};

export default SignUpForm;
