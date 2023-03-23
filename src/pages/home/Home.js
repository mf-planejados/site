import { Box, ContentContainer, Text } from "../../atoms"
import { Colors, } from "../../organisms"
import { SectionAbout } from "../../organisms/sections/sectionAbout"
import { Caroussel } from "../../organisms/slider/slider"

export default function Home(props) {
   return (
      <Box fullWidth sx={styles.container}>
         <Box fullWidth sx={styles.containerSection}>
            <Box sx={{ display: 'flex', width: '100%', marginTop: 15, }}>
               <ContentContainer row fullWidth style={{}} gap={0}>
                  <Box sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'center',
                     alignItems: 'center',
                     width: '100%',
                     height: '100%',
                     flex: 1,
                     gap: 1
                  }}>
                     <Box sx={{
                        ...styles.icon,
                        backgroundImage: `url('/logo.png')`,
                        backgroundSize: 'contain',
                        marginRight: 10,
                        backgroundRepeat: 'no-repeat',
                        height: 123,
                        width: 250,
                        left: 0,
                     }} onClick={() => router.push('/home/Home')} />

                     <Box sx={{ display: 'flex', width: '60%', marginTop: 5, }}>
                        <Text title style={{ color: Colors.darkRed }}>Faça seu orçamento,  <Text title > e tenha seu sonho planejado</Text> do seu jeito</Text>
                     </Box>
                     <Box sx={{ display: 'flex', width: '60%', marginTop: 2, }}>
                        <Text small bold style={{ color: Colors.darkBlue }}>Compromisso, confiança e agilidade. <Text small>Quem não gostaria de planejar os moveis de casa sob medida?</Text></Text>
                     </Box>
                  </Box>

                  <Box sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'center',
                     alignItems: 'center',
                     flex: 1,
                     gap: 3,
                  }}>
                     <Box sx={styles.imageHeader} />
                  </Box>
               </ContentContainer>
            </Box>
         </Box>

         <Box sx={{
            height: '250px',
         }}>
            <Caroussel />
         </Box>

         <SectionAbout />

      </Box>
   )
}


const styles = {
   container: {
      // backgroundColor: '#fff',
      flex: 1
   },
   containerSection: {
      backgroundColor: '#fff',
      // display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      top: 10,
      left: 0,
      width: '100%',
      height: 'auto'
   },
   textHeader: {
      color: '#fff'
   },
   imageHeader: {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundImage: `url('/header-image.jpeg')`,
      width: '90%',
      height: '90%'
   },
}