import { useEffect, useState } from "react"
import { Box, ContentContainer, Text } from "../../atoms"
import { CarouselSlider, Colors, DropList, } from "../../organisms"
import { useAppContext } from "../../context/AppContext"
import { Backdrop, useMediaQuery } from "@mui/material"
import { Footer } from "../../organisms/layout/footer"
import { getImages } from "../../validators/api-requests"

const comodos = [
   {
      id: '01',
      url: '/comodos/sala.jpg',
      name: 'Sala',
      icon: ''
   },
   {
      id: '02',
      url: '/comodos/quarto.jpeg',
      name: 'Quarto',
      icon: ''
   },
   {
      id: '03',
      url: '/comodos/banheiro.jpg',
      name: 'Banheiro',
      icon: ''
   },
   {
      id: '04',
      url: '/comodos/cozinha.jpg',
      name: 'Cozinha',
      icon: ''
   },
   {
      id: '05',
      url: '/comodos/area-externa.jpg',
      name: 'Espaço Externo',
      icon: ''
   },
]

export default function Portifolio() {

   const { setLoading, alert, dataImages } = useAppContext()
   const [comodoSelected, setComodoSelected] = useState('')
   const [section, setSection] = useState('Galeria')
   const [dataGalery, setDataGalery] = useState([])
   const [showCarousel, setShowCarousel] = useState(false)
   const [imagemSelecionada, setImagemSelecionada] = useState();


   useEffect(() => {
      setLoading(true)
      setTimeout(() => {
         const filterImages = dataImages?.filter(item => item.section === section)
         const dataImg = comodoSelected ? filterImages?.filter((item) => item.category == comodoSelected) : filterImages
         setDataGalery(dataImg)
         setLoading(false)
      },
         500)
   }, [comodoSelected])


   const posicaoImagemSelecionada = dataGalery?.indexOf(imagemSelecionada)
   const imagensOrdenadas = [
      dataGalery[posicaoImagemSelecionada],
      ...dataGalery?.slice(0, posicaoImagemSelecionada),
      ...dataGalery?.slice(posicaoImagemSelecionada + 1),
   ]

   const widthCarousel = useMediaQuery('(min-width:1536px)')
   const widthMobile = useMediaQuery('(max-width:600px)')

   const qntImages = dataGalery.length

   const openCarousel = (index) => {
      setImagemSelecionada(dataGalery[index]);
      setShowCarousel(true);
   };



   return (
      <Box sx={styles.container}>
         <Box sx={{
            display: 'flex',
            marginTop: { xs: 15, xm: 7, md: 7, lg: 10 },
            flexDirection: 'column'
         }}>
            <Box sx={styles.cardComodo}>
               <Box sx={{
                  width: { xs: '80%', xm: '80%', md: '70%', lg: '70%', xl: '100%' },
                  display: 'flex', gap: 4, alignItems: 'center', margin: '15px 0px',
                  justifyContent: 'center'
               }}>
                  <Box sx={{ display: 'flex', height: '90%', width: 6, backgroundColor: Colors.red }} />
                  <Text veryLarge>VEJA ALGUNS DE NOSSOS PROJETOS ENTREGUES</Text>
               </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, marginTop: 2, marginBottom: 5, alignItems: 'center', justifyContent: 'center' }}>
               {Array.from(new Set(dataImages?.filter(item => item.section === 'Galeria')?.map(item => item?.category))).map((uniqueCategory, index) => {
                  const selected = uniqueCategory === comodoSelected;

                  return (
                     <Box key={index} sx={{
                        display: 'flex', padding: '10px 12px',
                        backgroundColor: selected ? Colors.red : "#fff",
                        borderRadius: 2,
                        boxShadow: `rgba(149, 157, 165, 0.17) 0px 6px 24px`,
                        transition: '.3s',
                        color: '#000',
                        "&:hover": {
                           opacity: .5,
                           backgroundColor: Colors.red,
                           transition: '.3s',
                           cursor: 'pointer',
                           color: '#fff'
                        }
                     }} onClick={() => setComodoSelected(uniqueCategory)}>
                        <Text style={{ color: selected ? '#fff' : 'inherit' }}>{uniqueCategory}</Text>
                     </Box>
                  );
               })}
            </Box>
         </Box>
         <ContentContainer style={{ marginTop: { xs: 5, xm: 5, md: 5, lg: 5 }, marginBottom: 10 }}>
            <Box sx={styles.containerGalery}>

               {dataGalery == '' ?
                  <>
                     <Box sx={{ alignItems: 'center', justifyContent: 'center', width: '80%' }}>
                        <Text style={{ textAlign: 'center' }}>No momento não há fotos.</Text>
                        <Text style={{ textAlign: 'center' }}>Estamos trabalhando para trazer mais projetos para você!</Text>
                     </Box>
                  </>
                  :
                  dataGalery.map((item, index) => (
                     <Box key={index}>
                        <Box sx={{
                           ...styles.imgGalery,
                           backgroundImage: `url('${item.url}')`,
                           width: { xs: `350px`, xm: `280px`, md: `280px`, lg: `280px` },
                           height: { xs: '300px', xm: '250px', md: '250px', lg: '250px' },
                           margin: '10px',
                           "&:hover": {
                              opacity: 0.8,
                              cursor: 'pointer',
                              transition: '.5s'
                           }
                        }} onClick={() => {
                           setImagemSelecionada(item)
                           setShowCarousel(!showCarousel)
                        }
                        } />
                     </Box>
                  ))}
            </Box>

         </ContentContainer>
         <Backdrop
            sx={{ color: '#fff', zIndex: 9999999999, }}
            open={showCarousel}
         >
            <Box sx={{ width: { xs: `85%`, xm: '90%', md: '90%', lg: '90%', xl: '100%' }, position: 'relative' }} >
               <Box sx={{
                  backgroundImage: `url('/icons/close_menu_icon.png')`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  width: 40,
                  height: 40,
                  backgroundColor: '#f0f0f0',
                  borderRadius: 40,
                  position: 'absolute',
                  right: { xs: -20, xm: 20, md: 180, lg: 180, xl: 500 },
                  top: { xs: -10, xm: -10, md: 10, lg: 10, xl: -30 },
                  "&:hover": {
                     cursor: 'pointer', opacity: 0.8
                  }
               }} onClick={() => setShowCarousel(!showCarousel)} />
               {/* <CarouselSlider containerWidth={'100%'}
                  data={imagensOrdenadas}
                  showArrows
                  slideShowThumb={widthCarousel ? qntImages >= 12 ? 12 : qntImages : widthMobile ? qntImages >= 4 ? 4 : qntImages : qntImages >= 8 ? 8 : qntImages}
                  slideShow={1}
                  text={true}
                  width={widthCarousel ? 750 : 600}
                  height={widthCarousel ? 600 : 480}
                  controls thumb
                  positionSelect={posicaoImagemSelecionada}
               /> */}
               <Box sx={{
                  ...styles.imageCarouselLarge,
                  backgroundImage: `url('${imagemSelecionada?.url}')`,
                  width: { xs: `100%`, xm: `320px`, md: `320px`, lg: 600, xl: 800 },
                  height: { xs: '350px', xm: '300px', md: '300px', lg: 500, xl: 700 },
                  margin: 'auto',
               }} />
            </Box>
         </Backdrop>
         <Footer />
      </Box>

   )
}

const styles = {
   container: {
      flex: 1,
   },
   cardComodo: {
      justifyContent: 'space-around',
      display: 'flex',
      // alignItems: 'center'
   },
   textCard: {
      textAlign: 'center'
   },
   containerGalery: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: { xs: `center`, xm: 'center', md: 'center', lg: 'center' },
      alignItems: 'center',
   },
   imgGalery: {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      // overflow: 'hidden',
      marginBottom: 3,
   },
   backgroundSlider: {
      backgroundColor: Colors.darkGray,
      width: '100%',
      height: '100%',
      position: 'absolute',
      opacity: .7,
      justifyContent: 'center',
      alignItems: 'center',
   },
   containerSlide: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center'
   },
   imageCarouselLarge: {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      overflow: 'hidden',
      backgroundPosition: 'center center',
   },
}