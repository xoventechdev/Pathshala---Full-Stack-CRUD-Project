import AuthorForm from "../components/AuthorForm";
import MasterLayout from "../components/MasterLayout";
import React from "react";

const AddAuthor = () => {
  return (
    <MasterLayout>
      <div className="col-12 px-0">
        <div className="m-5">
          <h2 className="text-black">Add Category</h2>
          <div className="mt-4">
            <div className="row">
              <AuthorForm />
            </div>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default AddAuthor;
