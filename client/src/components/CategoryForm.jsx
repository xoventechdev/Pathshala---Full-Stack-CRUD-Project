import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useParams } from "react-router-dom";

const CategoryForm = () => {
  const { id } = useParams();

  const [catInfo, setCatInfo] = useState({
    title: "",
    description: "",
    image: "",
    isActive: true,
    totalBooks: 0,
    addedBy: "0", // Assuming addedBy is a string property
  });

  useEffect(() => {
    fatchCat();
  }, []);

  const fatchCat = async () => {
    await axios
      .get(`http://localhost:3000/api/read-category/${id}`)
      .then((res) => {
        console.log(res.data.response);
        setCatInfo(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const inputChange = (e) => {
    setCatInfo({ ...catInfo, [e.target.name]: e.target.value });
  };

  const saveToServer = (e) => {
    e.preventDefault();

    if (
      catInfo.title == "" ||
      catInfo.description == "" ||
      catInfo.image == ""
    ) {
      return toast.error("All fields are required", {
        position: "top-center",
      });
    }

    axios
      .post("http://localhost:3000/api/add-category", catInfo)
      .then((res) => {
        if (res.data.status == "success") {
          setCatInfo({
            title: "",
            description: "",
            image: "",
            isActive: true,
            totalBooks: 0,
            addedBy: 0,
          });
          toast.success(res.data.response, {
            position: "top-center",
          });
        } else {
          toast.error(res.data.response, {
            position: "top-center",
          });
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
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                name="title"
                value={catInfo.title}
                onChange={inputChange}
              />
            </Form.Group>
          </div>
          <div className="col-md-4 col-sm-6 col-12 p-1">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                name="description"
                value={catInfo.description}
                onChange={inputChange}
              />
            </Form.Group>
          </div>
          <div className="col-md-4 col-sm-6 col-12 p-1">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image"
                name="image"
                value={catInfo.image}
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
                value={catInfo.isActive}
              >
                <option value={true}>Active</option>
                <option value={false}>Inactive</option>
              </Form.Control>
            </Form.Group>
          </div>
          <div className="col-md-4 col-sm-6 col-12 p-1">
            <Form.Group>
              <Form.Label>Total Books</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter total books"
                name="totalBooks"
                value={catInfo.totalBooks}
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

export default CategoryForm;
