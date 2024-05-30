import axios from "../axios";

const createUser = async (userData) => {
  try {
    const response = await axios.post("/v1/users", userData);
    return { status: response.status, data: response.data.data };
  } catch (error) {
    throw error;
  }
};

export default createUser;