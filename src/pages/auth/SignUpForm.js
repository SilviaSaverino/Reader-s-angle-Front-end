import React from "react";
import { Link } from "react-router-dom";
import signupImage from "../../assets/signup.png";
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Image, Col, Row, Container } from "react-bootstrap";

const SignUpForm = () => {
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
          <Form>
            <Form.Group controlId="username">
              <Form.Label className="d-none">Username:</Form.Label>
              <Form.Control
                className={styles.Input}
                type="username"
                placeholder="Choose your username"
                name="username"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="d-none">Password:</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password1"
                placeholder="Choose a password"
                name="pw1"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label className="d-none">Confirm Password:</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password2"
                placeholder="Confirm your password"
                name="pw2"
              />
            </Form.Group>
            <Button className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Dull}`} variant="primary" type="submit">
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
