import axios from "axios";
import CategoryForm from "../components/CategoryForm";
import MasterLayout from "../components/MasterLayout";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateCategory = () => {
  const { id } = useParams();
  const [catData, setCatData] = useState([]);

  useEffect(() => {
    fatchCat();
  }, []);

  const fatchCat = async () => {
    await axios
      .get(`http://localhost:3000/api/read-category/${id}`)
      .then((res) => {
        setCatData(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MasterLayout>
      <div className="col-12 px-0">
        <div className="m-5">
          <h2 className="text-black">Update Category</h2>
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

export default UpdateCategory;
