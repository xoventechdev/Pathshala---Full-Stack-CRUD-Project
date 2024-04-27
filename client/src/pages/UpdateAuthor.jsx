import AuthorForm from "../components/AuthorForm";
import MasterLayout from "../components/MasterLayout";
import React from "react";
import { Link } from "react-router-dom";

const UpdateAuthor = () => {
  const isUpdate = true;
  return (
    <MasterLayout>
      <div className="col-12 px-0">
        <div className="m-3">
          <div className="d-flex justify-content-between">
            <h2 className="text-black">Update Author</h2>
            <Link to="/view-author" className="btn btn-primary">
              <span>View Author</span>
            </Link>
          </div>
          <div className="mt-4">
            <div className="row">
              <AuthorForm isUpdate={isUpdate} />
            </div>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default UpdateAuthor;
