import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const AuthorForm = ({ isUpdate }) => {
  let apiUrl = "http://localhost:3000/api/add-author";
  const { id } = useParams();
  if (isUpdate) {
    apiUrl = "http://localhost:3000/api/update-author/" + id;
  }

  const navigate = useNavigate();

  const [author, setAuthor] = useState({
    name: "",
    about: "",
    image: "",
    isActive: true,
  });

  useEffect(() => {
    if (isUpdate) {
      fetchAuthor();
    }
  }, [isUpdate]);

  const fetchAuthor = async () => {
    await axios
      .get(`http://localhost:3000/api/read-author/${id}`)
      .then((res) => {
        setAuthor(res.data.response[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const inputChange = (e) => {
    setAuthor({ ...author, [e.target.name]: e.target.value });
  };

  const saveToServer = (e) => {
    e.preventDefault();
    if (author.name == "") {
      return toast.error("Author name is required", {
        position: "top-center",
      });
    }

    axios
      .post(apiUrl, author)
      .then((res) => {
        if (res.data.status == "success") {
          if (isUpdate) {
            navigate("/view-author");
          } else {
            setAuthor({
              name: "",
              about: "",
              image: "",
              isActive: true,
            });
            toast.success(res.data.response, {
              position: "top-center",
            });
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <ToastContainer />
      <Form onSubmit={saveToServer}>
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
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                name="image"
                value={author.image}
                onChange={inputChange}
              />
            </Form.Group>
          </div>

          <div className="col-md-4 col-sm-6 col-12 p-1">
            <Form.Group>
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                onChange={inputChange}
                name="isActive"
                value={author.isActive}
              >
                <option value={true}>Active</option>
                <option value={false}>Inactive</option>
              </Form.Control>
            </Form.Group>
          </div>

          <div className="col-md-4 col-sm-6 col-12 p-1">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>About</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="about"
                value={author.about}
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
