import { Box } from '../atoms'
import { AppProvider } from '../context/AppContext'
import { Colors, HeaderMenu } from '../organisms'
import '../styles/globals.css'

const menuItems = [
   { to: '/home/HomePage', text: 'HOME' },
   { to: '/portifolio/portifolio', text: 'PORTIFÓLIO' },
   { to: '/portifolio/portifolio', text: 'PRODUTOS' },
   { to: '/portifolio/portifolio', text: 'SOBRE NÓS' },
   { to: '/portifolio/portifolio', text: 'CONTATO' },
];

function App({ Component, pageProps }) {
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
      marginTop: '120px',
      display: "flex",
      width: '100%',
      flexDirection: 'column',
      flex: 1,
      gap: `35px`,
      backgroundColor: '#fff',
      padding: { xs: `30px`, xm: `25px`, md: `50px`, lg: `0px 80px 0px 80px` },
      // paddingBottom: `60px`,
      overflowY: 'hidden',
      marginTop: { xs: `60px`, xm: `0px`, md: `0px`, lg: `0px` }
   },
}