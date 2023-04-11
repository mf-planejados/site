import { api } from "../api/api"

export const getImages = async () => {
   try {
      const response = await api.get(`/files`)
      return response
   } catch (error) {
      return error
   }
}