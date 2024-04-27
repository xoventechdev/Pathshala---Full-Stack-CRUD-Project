import axios from "axios";

export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

export const DeleteAPI = async (path, id) => {
  try {
    const res = await axios.delete(
      `http://localhost:3000/api/delete-${path}/${id}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const ReadAPI = async (path) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/read-${path}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
