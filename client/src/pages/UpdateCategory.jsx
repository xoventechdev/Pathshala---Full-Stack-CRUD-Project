import axios from "axios";
import CategoryForm from "../components/CategoryForm";
import MasterLayout from "../components/MasterLayout";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const UpdateCategory = () => {
  const isUpdate = true;

  return (
    <MasterLayout>
      <div className="col-12 px-0">
        <div className="m-3">
          <div className="d-flex justify-content-between">
            <h2 className="text-black">Update Category</h2>
            <Link to="/view-category" className="btn btn-primary">
              <span>View Category</span>
            </Link>
          </div>
          <div className="mt-4">
            <div className="row">
              <CategoryForm isUpdate={isUpdate} />
            </div>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default UpdateCategory;
