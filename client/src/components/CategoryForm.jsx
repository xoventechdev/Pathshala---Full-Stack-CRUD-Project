import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const CategoryForm = ({ isUpdate }) => {
  let apiUrl = "http://localhost:3000/api/add-category";
  const { id } = useParams();
  if (isUpdate) {
    apiUrl = "http://localhost:3000/api/update-category/" + id;
  }

  const navigate = useNavigate();

  const [catInfo, setCatInfo] = useState({
    title: "",
    description: "",
    image: "",
    isActive: true,
  });

  useEffect(() => {
    if (isUpdate) {
      fatchCat();
    }
  }, [isUpdate]);

  const fatchCat = async () => {
    await axios
      .get(`http://localhost:3000/api/read-category/${id}`)
      .then((res) => {
        setCatInfo(res.data.response[0]);
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
      .post(apiUrl, catInfo)
      .then((res) => {
        if (res.data.status == "success") {
          if (isUpdate) {
            navigate("/view-category");
          } else {
            setCatInfo({
              title: "",
              description: "",
              image: "",
              isActive: true,
            });
            toast.success(res.data.response, {
              position: "top-center",
            });
          }
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
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter description"
                name="description"
                value={catInfo.description}
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
