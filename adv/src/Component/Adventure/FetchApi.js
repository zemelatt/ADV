import axios from "axios";
async function fetchPosts() {
  const { data } = await axios.get("http://localhost:2222/all-adventures");
  return data;
}

export default fetchPosts;
