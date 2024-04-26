import BookForm from "../components/BookForm";
import MasterLayout from "../components/MasterLayout";
import React from "react";

const AddBook = () => {
  return (
    <MasterLayout>
      <div className="col-12 px-0">
        <div className="m-5">
          <h2 className="text-black">Add Book</h2>
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
