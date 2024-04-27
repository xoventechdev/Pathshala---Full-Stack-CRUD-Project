import AuthorList from "../components/AuthorList";
import MasterLayout from "../components/MasterLayout";
import React, { useState } from "react";

const ListAuthor = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <MasterLayout>
      <div className="col-12 px-0">
        <div className="m-3">
          <div className="d-flex justify-content-between">
            <h2 className="text-black">Author List</h2>
            <div className="mb-1">
              <input
                type="text"
                className="form-control"
                placeholder="Search by title"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-4">
            <div className="row">
              <AuthorList searchTerm={searchTerm} />
            </div>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default ListAuthor;
<h2>List Author</h2>;
