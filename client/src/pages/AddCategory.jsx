import { Link } from "react-router-dom";
import CategoryForm from "../components/CategoryForm";
import MasterLayout from "../components/MasterLayout";
import React from "react";

const AddCategory = () => {
  return (
    <MasterLayout>
      <div className="col-12 px-0">
        <div className="m-3">
          <div className="d-flex justify-content-between">
            <h2 className="text-black">Add Category</h2>
            <Link to="/view-category" className="btn btn-primary">
              <span>View Category</span>
            </Link>
          </div>
          <div className="mt-4">
            <div className="row">
              <CategoryForm />
            </div>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default AddCategory;
