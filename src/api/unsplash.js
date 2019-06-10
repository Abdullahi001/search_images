import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID b1b23567cbe40f4f2ba4805ba658e10e47099dfc35d177981293577ff9a7c41e"
  }
});
