import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { DeleteAPI } from "../Utility/Helper";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

const CategoryList = ({ searchTerm }) => {
  const [catInfo, setCatInfo] = useState([]);
  const [itemChanged, setItemChanged] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/read-category")
      .then((res) => {
        setCatInfo(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [itemChanged]);

  const filteredCategories = catInfo.filter((category) =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const deleteItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await DeleteAPI("category", id);
          console.log(response);
          if (response.status == "success") {
            Swal.fire("Deleted!", response.response, "success");
            setItemChanged(!itemChanged);
          } else {
            Swal.fire("Failed!", response.response, "error");
          }
        } catch (error) {
          console.error("Error deleting data:", error);
          throw error;
        }
      }
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Title</th>
              <th scope="col">Image</th>
              <th scope="col">isActive</th>
              <th scope="col">Total Books</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredCategories.length > 0 ? (
              filteredCategories.map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.title}</td>
                    <td>
                      <img height={60} src={item.image} alt={item.title} />
                    </td>
                    <td>{item.isActive ? "Active" : "Inactive"}</td>
                    <td>{item.totalBooks}</td>
                    <td>
                      <Link
                        to={"/update-category/" + item._id}
                        className="btn btn-success m-1"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => deleteItem(item._id)}
                        className="btn btn-danger m-1"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CategoryList;
