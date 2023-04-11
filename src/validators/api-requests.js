import { api } from "../api/api"

export const getImages = async () => {
   try {
      const response = await api.get(`/filesweb`)
      return response
   } catch (error) {
      return error
   }
}

export const sendBudget = async (budget) => {
   try {
      const response = await api.post(`/budget`, {budget})
      return response
   } catch (error) {
      return error
   }
}

export const emailValidator = (email) => {
   const EMAIL_REGEX = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&*'+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
   return EMAIL_REGEX.test(email)
}

