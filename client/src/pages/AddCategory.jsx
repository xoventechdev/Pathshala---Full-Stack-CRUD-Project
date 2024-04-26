import CategoryForm from "../components/CategoryForm";
import MasterLayout from "../components/MasterLayout";
import React from "react";

const AddCategory = () => {
  return (
    <MasterLayout>
      <div className="col-12 px-0">
        <div className="m-5">
          <h2 className="text-black">Add Category</h2>
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
