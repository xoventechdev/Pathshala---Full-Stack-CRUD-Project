import React, { useEffect, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const BookForm = ({ isUpdate }) => {
  const { id } = useParams();
  const apiUrl = "http://localhost:3000/api/add-book";
  if (isUpdate) {
    apiUrl = "http://localhost:3000/api/update-book/" + id;
  }
  const navigate = useNavigate();
  const [bookInfo, setBookInfo] = useState({
    title: "",
    author: "",
    description: "",
    category: "",
    image: "",
    pdf_url: "",
    audio_url: "",
    publisher: "",
    pdfSize: "",
    isAudio: false,
    isActive: true,
    isFeatured: false,
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    setBookInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [catInfo, setCatInfo] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/read-category")
      .then((res) => {
        setCatInfo(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [authorInfo, setAuthorInfo] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/read-author")
      .then((res) => {
        setAuthorInfo(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const saveToServer = (e) => {
    e.preventDefault();

    if (
      bookInfo.title == "" ||
      bookInfo.author == "" ||
      bookInfo.category == "" ||
      bookInfo.image == "" ||
      bookInfo.pdf_url == "" ||
      bookInfo.pdfSize == ""
    ) {
      return toast.error("All fields are required", {
        position: "top-center",
      });
    }

    axios
      .post(apiUrl, bookInfo)
      .then((res) => {
        console.log(res);
        if (res.data.status == "success") {
          if (isUpdate) {
            navigate("/view-book");
          } else {
            setBookInfo({
              title: "",
              author: "",
              description: "",
              category: "",
              image: "",
              pdf_url: "",
              audio_url: "",
              publisher: "",
              pdfSize: "",
              isAudio: false,
              isActive: true,
              isFeatured: false,
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
            <Form.Group>
              <Form.Label>Book Name *</Form.Label>
              <Form.Control
                type="text"
                onChange={inputChange}
                placeholder="Enter Book Name"
                name="title"
                value={bookInfo.title}
              />
            </Form.Group>
          </div>
          <div className="col-md-4 col-sm-6 col-12 p-1">
            <Form.Group>
              <Form.Label>Author *</Form.Label>
              <Form.Control
                as="select"
                onChange={inputChange}
                name="author"
                value={bookInfo.author}
              >
                <option value="">Select a author</option>
                {authorInfo.map((author) => (
                  <option key={author._id} value={author._id}>
                    {author.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </div>

          <div className="col-md-4 col-sm-6 col-12 p-1">
            <Form.Group>
              <Form.Label>Category *</Form.Label>
              <Form.Control
                as="select"
                onChange={inputChange}
                name="category"
                value={bookInfo.category}
              >
                <option value="">Select a category</option>
                {catInfo.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.title}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </div>

          <div className="col-md-4 col-sm-6 col-12 p-1">
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                onChange={inputChange}
                placeholder="Enter Description"
                name="description"
                value={bookInfo.description}
              />
            </Form.Group>
          </div>

          <div className="col-md-4 col-sm-6 col-12 p-1">
            <Form.Group>
              <Form.Label>Publisher Name</Form.Label>
              <Form.Control
                type="text"
                onChange={inputChange}
                placeholder="Enter Publisher Name"
                name="publisher"
                value={bookInfo.publisher}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Is Active</Form.Label>
              <Form.Control
                as="select"
                onChange={inputChange}
                placeholder="Enter Is Featured"
                name="isActive"
                value={bookInfo.isActive}
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </Form.Control>
            </Form.Group>
          </div>

          <div className="col-md-4 col-sm-6 col-12 p-1">
            <Form.Group>
              <Form.Label>PDF URL *</Form.Label>
              <Form.Control
                type="text"
                onChange={inputChange}
                placeholder="Enter PDF URL"
                name="pdf_url"
                value={bookInfo.pdf_url}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>PDF Size *</Form.Label>
              <Form.Control
                type="text"
                onChange={inputChange}
                placeholder="Enter PDF Size"
                name="pdfSize"
                value={bookInfo.pdfSize}
              />
            </Form.Group>
          </div>

          <div className="col-md-4 col-sm-6 col-12 p-1">
            <Form.Group>
              <Form.Label>Cover Image *</Form.Label>
              <Form.Control
                type="text"
                onChange={inputChange}
                placeholder="Enter Image"
                name="image"
                value={bookInfo.image}
              />
            </Form.Group>
          </div>

          <div className="col-md-4 col-sm-6 col-12 p-1">
            <Form.Group>
              <Form.Label>Is Featured</Form.Label>
              <Form.Control
                as="select"
                onChange={inputChange}
                placeholder="Enter Is Featured"
                name="isFeatured"
                value={bookInfo.isFeatured}
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </Form.Control>
            </Form.Group>
          </div>
          <div className="col-md-4 col-sm-6 col-12 p-1"></div>

          <div className="col-md-4 col-sm-6 col-12 p-1">
            <Form.Group>
              <Form.Label>Is Audio</Form.Label>
              <Form.Control
                as="select"
                onChange={inputChange}
                placeholder="Enter Is Featured"
                name="isAudio"
                value={bookInfo.isAudio}
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </Form.Control>
            </Form.Group>
          </div>

          {bookInfo.isAudio === "true" && (
            <div className="col-md-4 col-sm-6 col-12 p-1">
              <Form.Group>
                <Form.Label>Audio URL</Form.Label>
                <Form.Control
                  type="text"
                  onChange={inputChange}
                  placeholder="Enter Audio URL"
                  name="audio_url"
                  value={bookInfo.audio_url}
                />
              </Form.Group>
            </div>
          )}

          {bookInfo.image && (
            <div className="col-md-4 col-sm-6 col-12 p-1">
              <h5>View Cover Image</h5>
              <img
                src={bookInfo.image}
                alt="Cover"
                style={{ maxWidth: "100%" }}
              />
            </div>
          )}
        </div>

        <div className="d-flex">
          <button className="btn btn-primary p-2 mt-2" type="submit">
            Submit
          </button>
        </div>
      </Form>
    </>
  );
};

export default BookForm;
