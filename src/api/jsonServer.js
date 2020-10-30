import axios from "axios";

export default axios.create({
  //Update after every 8 hours or every time starting tunnel
  baseURL: "http://1be9a81a212c.ngrok.io",
});
