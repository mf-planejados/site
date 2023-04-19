import { useEffect, useState } from "react"
import { Box, ContentContainer, Text } from "../../atoms"
import { useAppContext } from "../../context/AppContext"
import { Colors, Carousel } from "../../organisms"
import { Footer } from "../../organisms/layout/footer"
import { SectionAbout, SectionDevelopment, SectionProjects } from "../../organisms/sections/index"

export default function HomePage() {

   const { dataImages } = useAppContext()

   return (
      <Box fullWidth sx={styles.container}>
         <Box fullWidth sx={styles.containerSection}>
            <Box sx={{ display: 'flex', width: '100%', }}>
               <ContentContainer row fullWidth style={{ height: { xs: 'auto', xm: 480, md: 480, lg: 480 }, flexDirection: { xs: `column`, xm: 'row', md: 'row', lg: 'row' }, boxShadow: { xs: `none`, } }} gap={0}>
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
                        // marginRight: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'pink',
                        backgroundRepeat: 'no-repeat',
                        height: 123,
                        width: 250,
                        left: 0,
                        display: { xs: 'none', xm: 'flex', md: 'flex', lg: 'flex' }
                     }} onClick={() => router.push('/home/Home')} />

                     <Box sx={{ display: 'flex', width: { xs: `100%`, xm: '60%', md: '60%', lg: '60%' }, marginTop: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <Text title bold style={{ color: Colors.darkRed, textAlign: 'center' }}>FAÇA SEU ORÇAMENTO  <Text title > E TENHA SEU SONHO PLANEJADO</Text> DO SEU JEITO</Text>
                     </Box>
                     <Box sx={{ display: 'flex', width: { xs: `100%`, xm: '60%', md: '60%', lg: '60%' }, marginTop: 2, alignItems: 'center', justifyContent: 'center' }}>
                        <Text small bold style={{ color: Colors.darkBlue, textAlign: 'center' }}>Compromisso, confiança e agilidade. <Text small>Quem não gostaria de planejar os moveis de casa sob medida?</Text></Text>
                     </Box>
                  </Box>

                  <Box sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'center',
                     alignItems: 'center',
                     flex: 1,
                     gap: 3,
                     marginTop: { xs: `30px`, xm: '0px', md: '0px', lg: '0px' }
                  }}>
                     <Box sx={styles.imageHeader} />
                  </Box>
               </ContentContainer>
            </Box>
         </Box>

         <Box sx={{
            height: '300px',
         }}>
            <Carousel data={dataImages} />
         </Box>

         <SectionAbout data={dataImages} />

         <Box sx={{
            height: { xs: `auto`, xm: '600px', md: '600px', lg: '600px' },
            marginBottom: { xs: `100px`, xm: '0px', md: '0px', lg: '0px' }
         }}>
            <SectionDevelopment />
         </Box>

         <Box sx={{
            height: 'auto',
            marginBottom: 10
         }}>
            <SectionProjects data={dataImages} />
         </Box>
         <Footer />
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
      backgroundImage: `url('https://mf-planejados.s3.us-east-1.amazonaws.com/a2799abb33672f85cc8cc68d357035db-home%2520page%2520marcenaria.jpeg')`,
      width: { xs: '300px', xm: '90%', md: '90%', lg: '90%' },
      height: { xs: '250px', xm: '90%', md: '90%', lg: '90%' }
   },
}
