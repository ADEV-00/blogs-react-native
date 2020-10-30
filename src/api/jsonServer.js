import axios from "axios";

export default axios.create({
  //Update after every 8 hours or every time starting tunnel
  baseURL: "http://aa911cf16b87.ngrok.io",
});
