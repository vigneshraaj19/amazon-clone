import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://amazonapi12.herokuapp.com'
     
});

export default instance;