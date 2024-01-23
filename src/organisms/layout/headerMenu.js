import { useMediaQuery, useTheme } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Box, Text } from "../../atoms"
import { Colors } from "./Colors"
import Hamburger from "hamburger-react"

export const HeaderMenu = ({ menuItems = [] }) => {

   const router = useRouter()
   const home = router.pathname === '/';

   const [showMenuUser, setShowMenuUser] = useState(false)
   const [showMenuMobile, setShowMenuMobile] = useState(false)
   const theme = useTheme()
   const navBar = useMediaQuery(theme.breakpoints.down('md'))
   const [scrollPosition, setScrollPosition] = useState(0);

   useEffect(() => {
      const handleScroll = () => {
         setScrollPosition(window.scrollY);
      };



      // Adiciona um ouvinte de evento de rolagem quando o componente é montado
      window.addEventListener('scroll', handleScroll);

      // Remove o ouvinte de evento de rolagem quando o componente é desmontado
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   const readerHasColor = scrollPosition > 0;

   return (
      <>
         {!navBar ?
            //Menu Desktop
            <>
               <Box sx={{
                  ...styles.leftMenuMainContainer, ...(home && {
                     boxShadow: readerHasColor ? `rgba(149, 157, 165, 0.17) 0px 6px 24px` : 'none',
                     borderBottom: readerHasColor ? `1px solid #00000010` : 'none',
                     backgroundColor: readerHasColor ? '#fff' : 'transparent',
                     transition: 'background-color 0.3s ease-in-out',
                  })
               }}>
                  <Box sx={{
                     ...styles.icon,
                     backgroundImage: `url('/logo.png')`,
                     backgroundSize: 'contain',
                     height: 60,
                     width: 120,
                     left: 0,
                     ...(home && { display: readerHasColor ? 'flex' : 'none', }),
                     "&:hover": {
                        cursor: 'pointer', opacity: 0.8
                     }
                  }} onClick={() => router.push('/')} />
                  < Box sx={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
                     {menuItems.map((item, index) =>
                        <MenuItem
                           readerHasColor={readerHasColor}
                           home={home}
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

               <Box sx={{
                  ...styles.menuResponsive,
                  ...(home && {
                     boxShadow: readerHasColor ? `rgba(149, 157, 165, 0.17) 0px 6px 24px` : 'none',
                     borderBottom: readerHasColor ? `1px solid #00000010` : 'none',
                     backgroundColor: readerHasColor ? '#fff' : 'transparent',
                     transition: 'background-color 0.3s ease-in-out'
                  })
               }}>
                  <Box sx={{
                     backgroundImage: `url('/logo.png')`,
                     backgroundSize: 'contain',
                     backgroundRepeat: 'no-repeat',
                     width: 1,
                     height: 30,
                     marginTop: 0,
                     display: home && (readerHasColor ? 'flex' : 'none'),
                     transition: '1s',
                     zIndex: 999999,
                     "&:hover": {
                        cursor: 'pointer', opacity: 0.8
                     }
                  }} onClick={() => router.push('/')} />
                  <Hamburger toggled={showMenuMobile} size={25} toggle={setShowMenuMobile} duration={0.8} color={home ? (readerHasColor ? 'black' : "#fff") : 'black'} />
               </Box>
               {showMenuMobile ?
                  <>
                     <Box sx={{
                        ...styles.menuMobileContainer, width: showMenuMobile ? '280px' : 0,
                     }}>
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
                        }} onClick={() => router.push('/')} />
                        < Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, width: showMenuMobile ? '350px' : 0 }}>
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

   const { to, text, icon, currentPage, onClick, readerHasColor, home } = props
   const [isHovered, setIsHovered] = useState(false);


   return (
      <Link href={to} onClick={onClick}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}>
         <Box sx={{
            display: 'flex',
            padding: `35px 20px`,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: { xs: `100%`, xm: '60%', md: '60%', lg: '60%' },
            textAlign: 'center',
            color: currentPage ? '#f0f0f0' : Colors.paleDarkBlue,
            ...(home && { color: currentPage ? readerHasColor ? '#f0f0f0 ' : '#f0f0f0' : readerHasColor ? Colors.paleDarkBlue : '#fff', }),
            ...(currentPage ?
               { backgroundColor: Colors.lightBlue }
               :
               {
                  "&:hover": {
                     // borderBottom: { xs: `none`, xm: `0.5px solid ${Colors.darkRed}`, md: `0.5px solid ${Colors.darkRed}`, lg: `0.5px solid ${Colors.darkRed}` },
                     color: Colors.darkRed,
                     transition: 'border-bottom 0.1s ease-in-out',
                  }
               }),
         }}>
            <Box sx={{ alignItems: 'center', color: 'inherit', marginBottom: 0, display: 'flex', }}>
               <Box sx={{ ...styles.icon, backgroundImage: `url(/icons/${icon}${currentPage ? '_light' : ''}.png)`, marginRight: '5px', marginBottom: '5px' }} />
               <Text style={{
                  color: 'inherit', width: 80
               }}>{text}</Text>

               <Box>
               </Box>
            </Box>
         </Box>
         <Box sx={{
            backgroundColor: Colors.darkRed,
            width: isHovered ? '70%' : '0',
            transition: 'width 0.3s ease-in-out',
            height: '2px', backgroundColor: Colors.darkRed
         }} />
      </Link >

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
      padding: `40px 40px`,
      zIndex: 9999,
      boxShadow: `rgba(149, 157, 165, 0.17) 0px 6px 24px`,
      borderBottom: `1px solid #00000010`,
      backgroundColor: '#fff',
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
      height: '30px',
      width: '100%',
      backgroundColor: '#fff',
      borderRight: `1px solid #00000010`,
      padding: `30px 20px`,
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