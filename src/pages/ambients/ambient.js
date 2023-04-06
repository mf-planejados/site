import { useEffect, useState } from "react"
import { Box, ContentContainer, Text } from "../../atoms"
import { CarouselSlider, Colors, DropList, } from "../../organisms"
import { useAppContext } from "../../context/AppContext"
import { Backdrop, useMediaQuery } from "@mui/material"
import { Footer } from "../../organisms/layout/footer"

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

const data = [
   {
      id: '01',
      url: '/img/Sala 1.1.jpeg',
      name: 'Sala',
   },
   {
      id: '02',
      url: '/img/Sala 1.2.jpeg',
      name: 'Sala',
   },
   {
      id: '03',
      url: '/img/Sala 1.3.jpeg',
      name: 'Sala',
   },
   {
      id: '04',
      url: '/img/Sala 2.1.jpeg',
      name: 'Sala',
   },
   {
      id: '05',
      url: '/img/Sala 1.5.jpeg',
      name: 'Sala',
   },
   {
      id: '06',
      url: '/img/Banheiro 1.1.jpeg',
      name: 'Banheiro',
   },
   {
      id: '07',
      url: '/img/Banheiro 1.2.jpeg',
      name: 'Banheiro',
   },
   {
      id: '08',
      url: '/img/Banheiro 1.3.jpeg',
      name: 'Banheiro',
   },
   {
      id: '09',
      url: '/img/Banheiro 1.4.jpeg',
      name: 'Banheiro',
   },
   {
      id: '10',
      url: '/img/Cozinha 1.1.jpeg',
      name: 'Cozinha',
   },

   {
      id: '11',
      url: '/img/Cozinha 1.2.jpeg',
      name: 'Cozinha',
   },

   {
      id: '12',
      url: '/img/Cozinha 1.3.jpeg',
      name: 'Cozinha',
   },
   {
      id: '13',
      url: '/img/Cozinha 1.4.jpeg',
      name: 'Cozinha',
   },

   {
      id: '14',
      url: '/img/Sala 1.6.jpeg',
      name: 'Espaço Externo',
   },
   {
      id: '15',
      url: '/img/Sala 1.7.jpeg',
      name: 'Espaço Externo',
   },
   {
      id: '16',
      url: '/img/Sala 1.8.jpeg',
      name: 'Espaço Externo',
   },
   {
      id: '17',
      url: '/img/Sala 1.9.jpeg',
      name: 'Espaço Externo',
   },
]

export default function Portifolio() {

   const [comodoSelected, setComodoSelected] = useState('')
   const [dataGalery, setDataGalery] = useState([])
   const [showCarousel, setShowCarousel] = useState(false)

   const [imagemSelecionada, setImagemSelecionada] = useState(data[0]);
   const posicaoImagemSelecionada = data.indexOf(imagemSelecionada)
   const imagensOrdenadas = [
      data[posicaoImagemSelecionada],
      ...data.slice(0, posicaoImagemSelecionada),
      ...data.slice(posicaoImagemSelecionada + 1),
    ]

   const { setLoading } = useAppContext()
   const widthCarousel = useMediaQuery('(min-width:1536px)')
   const widthMobile = useMediaQuery('(max-width:600px)')

   function selectedUrl(index) {
      setUrlSelect(index)
   }

   useEffect(() => {
      setLoading(true)
      handleReload()

   }, [comodoSelected])

   const handleReload = () => {
      const dataImg = comodoSelected ? data?.filter((item) => item.name === comodoSelected.name) : data
      setDataGalery(dataImg)
      setTimeout(() => {
         setLoading(false)
      }, 500)
   }

   return (
      <Box sx={styles.container}>
         <Box sx={styles.cardComodo}>
            <Box sx={{ width: { xs: '100%', xm: '80%', md: '80%', lg: '80%' }, marginTop:{ xs: 15, xm: 7, md: 7, lg: 7 } , marginRight: { xs: '0%', xm: '20%', md: '20%', lg: '20%' } }}>
               <Text title style={{ textAlign: 'center' }}>Veja alguns de nossos projetos entregues</Text>
            </Box>
            <ContentContainer style={{ position: { xs: 'fixed', xm: 'fixed', md: 'fixed', lg: 'fixed' }, right: 0, width: { xs: '100%', xm: '25%', md: '25%', lg: '25%' }, zIndex: 999999, marginTop: { xs: -2, xm: 1.5, md: 1.5, lg: 1.5 } }}>
               <DropList
                  data={comodos}
                  placeholder='Selecione um cômodo'
                  fieldToDisplay='name'
                  selectedOption={comodoSelected}
                  onSelect={(value) => setComodoSelected(value)}
                  maxHeight={215}
               />
            </ContentContainer>
         </Box>
         <ContentContainer style={{ marginTop: { xs: 5, xm: 10, md: 10, lg: 10 }, marginBottom: 10 }}>
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
            <Box sx={{ width: { xs: `85%`, xm: '90%', md: '90%', lg: '90%' } }} >
               <Box sx={{
                  backgroundImage: `url('/icons/close_menu_icon.png')`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  marginLeft: '95%',
                  width: 40,
                  height: 40,
                  "&:hover": {
                     cursor: 'pointer', opacity: 0.8
                  }
               }} onClick={() => setShowCarousel(!showCarousel)} />
               <CarouselSlider containerWidth={'100%'}
                  data={imagensOrdenadas}
                  showArrows
                  slideShowThumb={widthCarousel ? 12 : widthMobile ? 4 : 8}
                  slideShow={1}
                  text={true}
                  width={widthCarousel ? 750 : 600}
                  height={widthCarousel ? 600 : 480}
                  controls thumb 
                  positionSelect={posicaoImagemSelecionada}
                  />
               {/* <CarouselSlider
                  containerWidth={'100%'}
                  slider1={dataGalery}
                  slider2={dataGalery}
                  showArrows
                  // slideShow={1}
                  text={true}
                  controls
                  thumb /> */}
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
}