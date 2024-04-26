import CategoryList from "../components/CategoryList";
import MasterLayout from "../components/MasterLayout";
import React from "react";

const ListCategory = () => {
  return (
    <MasterLayout>
      <div className="col-12 px-0">
        <div className="m-5">
          <h2 className="text-black">Category List</h2>
          <div className="mt-4">
            <div className="row">
              <CategoryList />
            </div>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default ListCategory;
