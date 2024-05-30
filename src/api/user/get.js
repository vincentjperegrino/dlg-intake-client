import axios from "../axios";

const getUser = async (email, token) => {
  try {
    const response = await axios.get("/v1/users", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const users = response.data.data;
    const user = users.find(user => user.email === email);

    if (user) {
      return { status: response.status, data: user };
    } else {
      return { status: 404, message: "User not found" };
    }
  } catch (error) {
    throw error;
  }
};

export default getUser;