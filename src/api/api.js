import axios from 'axios'

export const api = axios.create({
  //API Local
  // baseURL: process.env.NEXT_PUBLIC_API_URL
  
  //API Quente
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
