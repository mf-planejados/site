import { Box, ContentContainer, Text } from "../../atoms"
import { Colors, } from "../../organisms"

export default function Home(props) {
   return (
      <Box fullWidth sx={styles.container}>
         <Box sx={{ display: 'flex', height: '80%', width: '90%', marginTop: 10 }}>
            <ContentContainer row fullWidth style={{ padding: 0, boxShadow: 'none' }} gap={0}>
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

                  <Box sx={{ display: 'flex', width: '60%', marginTop: 8, }}>
                     <Text title style={{ color: Colors.darkRed }}>Faça seu orçamento,  <Text title > e tenha seu sonho planejado</Text> do seu jeito</Text>
                  </Box>
                  <Box sx={{ display: 'flex', width: '60%', marginTop: 2,  }}>
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
   )
}


const styles = {
   container: {
      backgroundColor: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      top: 10,
      left: 0,
      width: '100%', height: '100%'
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