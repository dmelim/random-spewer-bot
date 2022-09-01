import axios from "axios";

const response = async (url) => {
  let info = await axios.post(url);
  let { description } = await info.data;
  return description;
};

export default response;
