import React, { useEffect, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const BookForm = () => {
  const [bookInfo, setBookInfo] = useState({
    title: "",
    author: "",
    description: "",
    category: "",
    image: "",
    pdf_url: "",
    audio_uel: "",
    publisher: "",
    pdfSize: "",
    isAudio: "",
    isActive: "",
    isFeatured: "",
    addedBy: "",
  });

  const inputChange = (e) => {
    setBookInfo({ ...bookInfo, [e.target.name]: e.target.value });
  };

  const [catInfo, setCatInfo] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/read-category")
      .then((res) => {
        console.log(res.data);
        setCatInfo(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <ToastContainer />
      <Form>
        <div className="row">
          <div className="col-md-4 col-sm-6 col-12 p-1">
            <Form.Group>
              <Form.Label>Book Name</Form.Label>
              <Form.Control
                type="text"
                onChange={inputChange}
                placeholder="Enter Book Name"
                name="bookName"
                value={bookInfo.title}
              />
            </Form.Group>
          </div>
          <div className="col-md-4 col-sm-6 col-12 p-1">
            <Form.Group>
              <Form.Label>Author Name</Form.Label>
              <Form.Control
                type="text"
                onChange={inputChange}
                placeholder="Enter Author Name"
                name="authorName"
                value={bookInfo.author}
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
                name="publisherName"
                value={bookInfo.publisher}
              />
            </Form.Group>
          </div>
          <div className="col-md-4 col-sm-6 col-12 p-1">
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                onChange={inputChange}
                placeholder="Enter Description"
                name="description"
                value={bookInfo.description}
              />
            </Form.Group>
          </div>
          <div className="col-md-4 col-sm-6 col-12 p-1">
            <Form.Group>
              <Form.Label>Category</Form.Label>
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
              <Form.Label>Image</Form.Label>
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
              <Form.Label>PDF URL</Form.Label>
              <Form.Control
                type="text"
                onChange={inputChange}
                placeholder="Enter PDF URL"
                name="pdf_url"
                value={bookInfo.pdf_url}
              />
            </Form.Group>
          </div>
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
          <div className="col-md-4 col-sm-6 col-12 p-1">
            <Form.Group>
              <Form.Label>PDF Size</Form.Label>
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
              <Form.Label>Is Audio</Form.Label>
              <Form.Control
                type="text"
                onChange={inputChange}
                placeholder="Enter Is Audio"
                name="isAudio"
                value={bookInfo.isAudio}
              />
            </Form.Group>
          </div>
          <div className="col-md-4 col-sm-6 col-12 p-1">
            <Form.Group>
              <Form.Label>Is Active</Form.Label>
              <Form.Control
                type="text"
                onChange={inputChange}
                placeholder="Enter Is Active"
                name="isActive"
                value={bookInfo.isActive}
              />
            </Form.Group>
          </div>
          <div className="col-md-4 col-sm-6 col-12 p-1">
            <Form.Group>
              <Form.Label>Is Featured</Form.Label>
              <Form.Control
                type="text"
                onChange={inputChange}
                placeholder="Enter Is Featured"
                name="isFeatured"
                value={bookInfo.isFeatured}
              />
            </Form.Group>
          </div>
          <div className="col-md-4 col-sm-6 col-12 p-1">
            <Form.Group>
              <Form.Label>Added By</Form.Label>
              <Form.Control
                type="text"
                onChange={inputChange}
                placeholder="Enter Added By"
                name="addedBy"
                value={bookInfo.addedBy}
              />
            </Form.Group>
          </div>
        </div>

        <div className="d-flex">
          <button className="btn btn-primary p-3 mt-2" type="submit">
            Submit
          </button>
        </div>
      </Form>
    </>
  );
};

export default BookForm;
