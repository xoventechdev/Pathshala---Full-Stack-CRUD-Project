import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CategoryList = () => {
  const [catInfo, setCatInfo] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/read-category")
      .then((res) => {
        console.log(res.data);
        setCatInfo(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Title</th>
              <th scope="col">Image</th>
              <th scope="col">Total Books</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {catInfo.length > 0 ? (
              catInfo.map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.title}</td>
                    <td>
                      <img height={60} src={item.image} alt={item.title} />
                    </td>
                    <td>{item.totalBooks}</td>
                    <td>
                      <Link
                        to={"/update-category/" + item._id}
                        className="btn btn-success m-1"
                      >
                        Edit
                      </Link>
                      <button className="btn btn-danger m-1">Delete</button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td className="text-center">No Data Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CategoryList;
