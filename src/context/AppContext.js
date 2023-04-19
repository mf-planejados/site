import { createContext, useContext, useState, useEffect } from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import { Alert } from "../organisms";
import { getImages } from "../validators/api-requests";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {

   const [loading, setLoading] = useState(false)
   const [alertData, setAlertData] = useState({
      active: false,
      type: '',
      title: '',
      message: ''
   })

   const [dataImages, setDataImages] = useState([])
   const alert = new ShowAlert(setAlertData)

   const handleImageAmbients = async () => {
      try {
         const response = await getImages()
         const { data } = response
         setDataImages(data)
      } catch (error) {
         console.log(error)
      }
   }


   useEffect(() => {
      handleImageAmbients()
   }, [])

   return (
      <AppContext.Provider
         value={{
            loading,
            setLoading,
            alert,
            dataImages,
            setDataImages
         }}
      >
         {children}
         <Alert
            active={alertData.active}
            type={alertData.type}
            title={alertData.title}
            message={alertData.message}
            handleClose={() => setAlertData({
               active: false,
               type: '',
               title: '',
               message: ''
            })}
         />
         <Backdrop
            sx={{ color: '#fff', zIndex: 99999999 }}
            open={loading}
         >
            <CircularProgress color='inherit' />
         </Backdrop>
      </AppContext.Provider>
   )
}

class ShowAlert {
   constructor(setAlertData) {
      this.setAlertData = setAlertData
   }

   success(message = '') {
      this.setAlertData({
         active: true,
         type: 'success',
         title: 'Tudo certo',
         message
      })
   }

   error(message = '') {
      this.setAlertData({
         active: true,
         type: 'error',
         title: 'Houve um problema',
         message
      })
   }

   info(title = '', message = '') {
      this.setAlertData({
         active: true,
         type: 'info',
         title,
         message
      })
   }
}

export const useAppContext = () => useContext(AppContext)