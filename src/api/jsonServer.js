import axios from "axios";

export default axios.create({
  //Update after every 8 hours or every time starting tunnel
  baseURL: "http://aec7710f78fa.ngrok.io/",
});
