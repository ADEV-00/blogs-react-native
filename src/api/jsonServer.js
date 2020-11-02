import axios from "axios";

export default axios.create({
  //Update after every 8 hours or every time starting tunnel
  baseURL: "http://b54bf5059c02.ngrok.io/",
});
