import axios from 'axios'

export const api = axios.create({
  //API Local
  // baseURL: "http:/192.168.0.129:3000",
  
  //API Quente
  baseURL: "https://api-mybank-app.vercel.app/",
});
