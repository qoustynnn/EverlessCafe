import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  FormFeedback,
  Row,
  Col,
} from "reactstrap";
import { Fade } from "react-animation-components";
import ScrollAnimation from "react-animate-on-scroll";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      subject: "",
      message: "",
      touched: {
        firstName: false,
        lastName: false,
        email: false,
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  validate(firstName, lastName, email, subject) {
    const errors = {
      firstName: "",
      lastName: "",
      email: "",
    };
    if (this.state.touched.firstName) {
      if (firstName.length < 2) {
        errors.firstName = "First name must be atleast 2 characters.";
      } else if (firstName.length > 15) {
        errors.firstName = "First name must be 15 or less characters.";
      }
    }
    if (this.state.touched.lastName) {
      if (lastName.length < 2) {
        errors.lastName = "Last name must be atleast 2 characters.";
      } else if (lastName.length > 15) {
        errors.lastName = "Last name must be 15 or less characters.";
      }
    }
    if (this.state.touched.email && !email.includes("@")) {
      errors.email = "Email should contain a @";
    }

    return errors;
  }

  handleBlur = (field) => () => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  handleSubmit(event) {
    console.log("Current state is: " + JSON.stringify(this.state));
    alert("Current state is: " + JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    const errors = this.validate(
      this.state.firstName,
      this.state.lastName,
      this.state.email,
      this.state.subject
    );

    return (
      <div className="container mt-5">
        <Fade in> 
        <div className="row border-bottom pb-4">
          <h2 className="text-center text-bold">Locations</h2>
          <div className="col-lg-6 mt-5 d-flex align-items-center flex-column">
            <span className="text-apart mb-5">
              Everless Teahouse - Brooklyn Park
            </span>
            <div className="map-responsive text-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2815.8891241241186!2d-93.32267718445443!3d45.10831557909838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b33bc340a8d80f%3A0x6df3577810a674a!2sGoCha%20Teahouse!5e0!3m2!1sen!2sus!4v1641436137966!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="col-lg-6 mt-5 align-items-center justify-content-center d-flex flex-column">
            <span className="text-underline text-apart text-monospace text-bold mb-4">
              Everless Teahouse
            </span>
            <p className="text-center">
              8462 Xerxes Ave N, Brooklyn Park, <br /> MN 55444
            </p>
            <span className="text-underline text-apart text-monospace text-bold mb-4">
              Business Hours
            </span>
            <p className="text-center">
              Monday - Friday // 12pm-9pm <br />
              Saturday - Sunday // 11am-9pm
            </p>
          </div>
        </div>
        </Fade>
        <ScrollAnimation animateIn="fadeIn" animateOnce>
        <div className="row mt-5  p-5">
          <div className="col-md-6">
            <h3 className="text-center text-bold">Contact Us!</h3>
          </div>
          <div className="col-md">
            <Form onSubmit={this.handleSubmit}>
              <Row>
                <Col md={6}>
                  <FormGroup inline>
                    <Label for="firstName">First Name</Label>
                    <Input
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={this.state.firstName}
                      onChange={this.handleInputChange}
                      onBlur={this.handleBlur("firstName")}
                      invalid={errors.firstName}
                    />
                    <FormFeedback>{errors.firstName}</FormFeedback>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup inline>
                    <Label for="lastName">Last Name</Label>
                    <Input
                      type="text"
                      name="lastName"
                      id="lastName"
                      value={this.state.lastName}
                      onChange={this.handleInputChange}
                      onBlur={this.handleBlur("lastName")}
                      invalid={errors.lastName}
                    />
                    <FormFeedback>{errors.lastName}</FormFeedback>
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  onBlur={this.handleBlur("email")}
                  invalid={errors.email}
                />
                <FormFeedback>{errors.email}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="subject">Subject</Label>
                <Input
                  type="text"
                  name="subject"
                  id="subject"
                  value={this.state.subject}
                  onChange={this.handleInputChange}
                />
                <FormFeedback>{errors.subject}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="message">Message</Label>
                <Input
                  type="textarea"
                  name="message"
                  id="message"
                  value={this.state.message}
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <Button type="submit">Submit</Button>
            </Form>
          </div>
        </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Contact;
