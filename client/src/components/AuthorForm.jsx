import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

const AuthorForm = () => {
  const [author, setAuthor] = useState({ name: "", about: "", image: "" });

  const inputChange = (e) => {
    setAuthor({ ...author, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer />
      <Form>
        <div className="row">
          <div className="col-md-4 col-sm-6 col-12 p-1">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={author.name}
                onChange={inputChange}
              />
            </Form.Group>
          </div>
          <div className="col-md-4 col-sm-6 col-12 p-1">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>About</Form.Label>
              <Form.Control
                type="text"
                name="about"
                value={author.about}
                onChange={inputChange}
              />
            </Form.Group>
          </div>
          <div className="col-md-4 col-sm-6 col-12 p-1">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                name="image"
                value={author.image}
                onChange={inputChange}
              />
            </Form.Group>
          </div>
          <div className="d-flex">
            <button className="btn btn-primary p-2 mt-2" type="submit">
              Submit
            </button>
          </div>
        </div>
      </Form>
    </>
  );
};

export default AuthorForm;
