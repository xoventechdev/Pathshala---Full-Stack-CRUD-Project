import { Link } from "react-router-dom";
import BookForm from "../components/BookForm";
import MasterLayout from "../components/MasterLayout";
import React from "react";

const AddBook = () => {
  return (
    <MasterLayout>
      <div className="col-12 px-0">
        <div className="m-3">
          <div className="d-flex justify-content-between">
            <h2 className="text-black">Add Book</h2>
            <Link to="/view-book" className="btn btn-primary">
              <span>View Book</span>
            </Link>
          </div>
          <div className="mt-4">
            <div className="row">
              <BookForm />
            </div>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default AddBook;
