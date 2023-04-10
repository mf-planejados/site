import { useMediaQuery, useTheme } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { Box, Text } from "../../atoms"
import { Colors } from "./Colors"
import Hamburger from "hamburger-react"

export const HeaderMenu = ({ menuItems = [] }) => {

   const router = useRouter()

   const [showMenuUser, setShowMenuUser] = useState(false)
   const [showMenuMobile, setShowMenuMobile] = useState(false)
   const theme = useTheme()
   const navBar = useMediaQuery(theme.breakpoints.down('md'))

   return (
      <>
         {!navBar ?
            //Menu Desktop
            <>
               <Box sx={styles.leftMenuMainContainer}>
                  <Box sx={{
                     ...styles.icon,
                     backgroundImage: `url('/logo.png')`,
                     backgroundSize: 'contain',
                     height: 60,
                     width: 120,
                     left: 0,
                     "&:hover": {
                        cursor: 'pointer', opacity: 0.8
                     }
                  }} onClick={() => router.push('/home/Home')} />
                  < Box sx={{ display: 'flex', width: '35%', justifyContent: 'center' }}>
                     {menuItems.map((item, index) =>
                        <MenuItem
                           key={`${index}_${item.to}`}
                           to={item.to}
                           text={item.text}
                           icon={item.icon}
                        />
                     )}
                  </Box>
               </Box>
            </>
            :
            //Menu Mobile
            <>

               <Box sx={styles.menuResponsive}>
                  <Box sx={{
                     backgroundImage: `url('/logo.png')`,
                     backgroundSize: 'contain',
                     backgroundRepeat: 'no-repeat',
                     width: 1,
                     height: 40,
                     marginTop: 1,
                     "&:hover": {
                        cursor: 'pointer', opacity: 0.8
                     }
                  }} onClick={() => router.push('/')} />
                  <Hamburger toggled={showMenuMobile} toggle={setShowMenuMobile} duration={0.8} />
               </Box>
               {showMenuMobile ?
                  <>
                     <Box sx={styles.menuMobileContainer}>
                        <Box sx={{
                           ...styles.icon,
                           backgroundImage: `url('/logo.png')`,
                           backgroundSize: 'contain',
                           width: 1,
                           height: 30,
                           marginTop: 1,
                           left: 0,
                           "&:hover": {
                              cursor: 'pointer', opacity: 0.8
                           }
                        }} onClick={() => {
                           router.push('/')
                        }} />
                        < Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                           {menuItems.map((item, index) =>
                              <MenuItem
                                 key={`${index}_${item.to}`}
                                 to={item.to}
                                 text={item.text}
                                 icon={item.icon}
                                 onClick={() => setShowMenuMobile(false)}
                              />
                           )}
                        </Box>
                     </Box>
                  </> : ''}
            </>
         }
      </>
   )
}

const MenuItem = (props) => {

   const { to, text, icon, currentPage, onClick } = props
   return (
      <Link href={to} onClick={onClick}>
         <Box sx={{
            display: 'flex',
            padding: `20px 20px`,
            justifyContent: 'center',
            width: { xs: `100%`, xm: '60%', md: '60%', lg: '60%' },
            textAlign: 'center',
            color: currentPage ? '#f0f0f0' : Colors.paleDarkBlue,
            ...(currentPage ?
               { backgroundColor: Colors.lightBlue }
               :
               {
                  "&:hover": {
                     borderBottom: { xs: `none`, xm: `0.5px solid ${Colors.darkRed}`, md: `0.5px solid ${Colors.darkRed}`, lg: `0.5px solid ${Colors.darkRed}` },
                     color: Colors.darkRed,
                     fontWeight: 'bold',
                  }
               }),
         }}>
            <Box sx={{ alignItems: 'center', color: 'inherit', marginBottom: 2, display: 'flex',}}>
               <Box sx={{ ...styles.icon, backgroundImage: `url(/icons/${icon}${currentPage ? '_light' : ''}.png)`, marginRight: '5px', marginBottom: '5px' }} />
               <Text small style={{
                  color: 'inherit', width: 80,
                  "&:hover": {
                     fontWeight: 'bold',
                  }
               }}>{text}</Text>

               <Box>
               </Box>
            </Box>
         </Box>
      </Link>

   )
}

const styles = {
   leftMenuMainContainer: {
      position: 'fixed',
      display: { xs: 'none', sm: 'flex', md: 'flex', lg: 'flex' },
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '95px',
      width: '100%',
      backgroundColor: '#fff',
      borderBottom: `1px solid #00000010`,
      padding: `40px 40px`,
      zIndex: 9999999,
      boxShadow: `rgba(149, 157, 165, 0.17) 0px 6px 24px`,
   },
   userBox: {
      backgroundColor: '#00000017',
      position: 'fixed',
      bottom: 0,
      padding: `10px 20px`,
      borderRadius: '10px 10px 0px 0px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      gap: 1,
      width: 150
   },
   userButtonContainer: {
      borderRadius: '5px',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: `5px 0px`,
      "&:hover": {
         backgroundColor: '#ddd',
         // transitionDelay: '1s',
         cursor: 'pointer'
      }
   },
   icon: {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      width: '15px',
      height: '15px',
      marginRight: '0px',
      backgroundImage: `url('/icons/engine_icon.png')`,
   },
   menuResponsive: {
      position: 'fixed',
      maxHeight: '60px',
      width: '100%',
      backgroundColor: '#fff',
      borderRight: `1px solid #00000010`,
      padding: `40px`,
      alignItems: 'center',
      justifyContent: 'right',
      display: 'flex',
      zIndex: 99999,
      boxShadow: `rgba(149, 157, 165, 0.17) 0px 6px 24px`,

   },
   iconMenuOpen: {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      width: '35px',
      height: '35px',
      marginLeft: '0px',
      backgroundImage: `url('/icons/Hamburger_icon.png')`,
      opacity: 0.7
   },
   iconMenuClose: {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      width: '55px',
      height: '55px',
      marginLeft: '0px',
      backgroundImage: `url('/icons/close_menu_icon.png')`,
      opacity: 0.7
   },
   menuMobileContainer: {
      position: 'fixed',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100%',
      backgroundColor: '#fff',
      borderRight: `1px solid #00000010`,
      padding: `40px 20px`,
      gap: 4,
      zIndex: 99999999,

   },
}