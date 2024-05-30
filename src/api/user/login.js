import axios from "../axios";

const login = async (data) => {
  const userData = {
    email: data.email,
    password: data.password,
    privilege: data.privilege
  };

  try {
    const response = await axios.post("/v1/users/login", userData);
    return { status: response.status, data: await response.data.data };
  } catch (error) {
    throw error;
  }
};

export default login;