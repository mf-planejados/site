import { useEffect } from 'react';
import { Box } from '../atoms'
import { AppProvider, useAppContext } from '../context/AppContext'
import { Colors, HeaderMenu } from '../organisms'
import { Footer } from '../organisms/layout/footer';
import '../styles/globals.css'
import { useRouter } from 'next/router';

const menuItems = [
   { to: '/home/homepage', text: 'HOME', icon: 'home_icon' },
   { to: '/ambients/ambient', text: 'AMBIENTES', icon: 'ambients_icon' },
   { to: '/product/products', text: 'PRODUTOS', icon: 'produtos_icon' },
   { to: '/contact/contacts', text: 'CONTATO', icon: 'tel-icon' },
];

function App({ Component, pageProps }) {

   const router = useRouter()
   const { setLoading } = useAppContext()

   useEffect(() => {
      router.push('/home/homepage')
   }, [])

   return (
      <AppProvider>
         <Box sx={styles.bodyContainer}>
            <HeaderMenu menuItems={menuItems} />
            <Box sx={styles.contentContainer}>
               <Component {...pageProps} />
            </Box>
         </Box>

      </AppProvider>
   )
}

export default App;

const styles = {
   bodyContainer: {
      display: "flex",
      minHeight: "100vh",
      flexDirection: "row",
      width: '100%',
   },
   contentContainer: {
      display: "flex",
      width: '100%',
      flexDirection: 'column',
      flex: 1,
      gap: `35px`,
      backgroundColor: '#fff',
      padding: { xs: `30px`, xm: `25px`, md: `50px`, lg: `0px 80px 0px 80px` },
      // paddingBottom: `60px`,
      overflowY: 'hidden',
      marginTop: { xs: `60px`, xm: 10, md: 10, lg: 10 }
   },
}