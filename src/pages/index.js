import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Box, Button, ContentContainer, Text, TextInput } from '../atoms'
import { Carousel, CarouselSlider, Colors, HeaderMenu } from '../organisms'
import { SectionAbout, SectionDevelopment, SectionProjects } from '../organisms/sections'
import { Footer } from '../organisms/layout/footer'
import { useAppContext } from '../context/AppContext'
import { useEffect, useRef, useState } from 'react'
import { Banner } from '../organisms/banner/banner'
import { menuItems } from '../helpers/configMenu'
import { Backdrop, useMediaQuery, useTheme } from '@mui/material'
import { useRouter } from 'next/router'
import { emailValidator, sendBudget } from '../validators/api-requests'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { api } from '../api/api'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

   const { dataImages, setLoading, alert } = useAppContext()
   const [displayTextIndex, setDisplayTextIndex] = useState(0);
   const [ambientSelected, setAmbientSelected] = useState();
   const [showCarousel, setShowCarousel] = useState(false)
   const [dataGalery, setDataGalery] = useState(dataImages)
   const [showAllPhotos, setShowAllPhotos] = useState(false);
   const [testimonials, setTestimonials] = useState([])

   const photosToShow = showAllPhotos ? dataGalery : dataGalery.slice(0, 3);
   const router = useRouter()


   useEffect(() => {
      setLoading(true)
      setTimeout(() => {
         const filterImages = dataImages?.filter(item => item.section === 'Galeria')
         const dataImg = ambientSelected ? filterImages?.filter((item) => item.category === ambientSelected) : filterImages
         setDataGalery(dataImg)
         setLoading(false)
      },
         500)
   }, [ambientSelected])

   const parceiros = [
      { id: '01', imagem: '/parceiros/arq_lura.jpeg', },
      { id: '02', imagem: '/parceiros/meyer.jpeg', },
      { id: '03', imagem: '/parceiros/paula_vaini.jpeg', },
      { id: '04', imagem: '/parceiros/cachi.jpeg', },
      { id: '05', imagem: '/parceiros/samaia.jpeg', },
      { id: '06', imagem: '/parceiros/arquiteia.jpeg', },
      { id: '07', imagem: '/parceiros/raquel_n.jpeg', },
      { id: '08', imagem: '/parceiros/studio_d.jpeg', }
   ]


   const texts = ['Realize seu sonho com a M&F Planejados', 'Compromisso, confiança e agilidade.',
      'Quem não gostaria de planejar os moveis de casa sob medida?'];
   useEffect(() => {
      const intervalId = setInterval(() => {
         setDisplayTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 3500); // Altera o índice do texto a cada 3 segundos

      // Limpa o intervalo quando o componente é desmontado
      return () => clearInterval(intervalId);
   }, [texts.length]); // Atualiza o efeito quando o número de textos muda

   const displayText = texts[displayTextIndex];

   const [budget, setBudget] = useState({})
   const widthLarge = useMediaQuery('(min-width:1536px)')

   const handleChange = (value) => {

      if (value.target.name == 'telephone') {
         const regex = /^\(?([0-9]{2})\)?([0-9]{4,5})\-?([0-9]{4})$/mg;
         let str = value.target.value.replace(/[^0-9]/g, "").slice(0, 11);
         value.target.value = str.replace(regex, "($1)$2-$3")
      }

      setBudget((prevValues) => ({
         ...prevValues,
         [value.target.name]: value.target.value,
      }))
   }

   const handleTestimonials = async () => {
      try {
         setLoading(true)
         const response = await api.get('/testimonials')
         const { data } = response
         setTestimonials(data)
         setLoading(false)
      } catch (error) {
         console.log('error useEffect', error)
      } finally {
         setLoading(false)
      }
   }

   useEffect(() => {
      handleTestimonials()
   }, [])

   const handleSendBudget = async () => {

      const { name, email, telephone, subject, message } = budget

      console.log(email)

      if (name == '') {
         return alert.error('O nome é obrigatório')
      }
      if (!email) {
         alert.error('O email é obrigatório')
         return false
      }
      if (!telephone) {
         alert.error('O telephone é obrigatório')
         return false
      }
      if (telephone?.length < 10) {
         alert.error('O telephone está incorreto')
         return false
      }
      if (subject == '') {
         alert.error('O subject é obrigatório')
         return false
      }
      if (message == '') {
         alert.error('O message é obrigatório')
         return false
      }
      if (!email || !emailValidator(email)) {
         alert.error("O email está inválido!")
         return false
      }
      else {
         setLoading(true)
         try {
            const response = await sendBudget(budget)
            const { status } = response

            if (status === 201) {
               alert.success('Orçamento enviado! Logo entraremos em contato com você!')
               setBudget('')
               return
            }

            alert.error('Tivemos um problema ao enviar o orçamento.');
            return null
         } catch (error) {
            alert.error('Tivemos um problema ao enviar o orçamento.');
            console.log(error)
            return null
         } finally {
            setLoading(false)
         }
      }
   }

   const sliderRef = useRef(null);

   const handleNext = () => {
      sliderRef.current.slickNext();
   };

   const handlePrev = () => {
      sliderRef.current.slickPrev();
   };

   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false, // ajusta automaticamente a altura dos slides
      autoplay: true,
      autoplaySpeed: 3500,
      responsive: [
         {
            breakpoint: 1280,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: false,
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               initialSlide: 2
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: false,
            }
         }
      ]
   };

   const theme = useTheme()
   const navBar = useMediaQuery(theme.breakpoints.down('md'))


   return (
      <>
         <Head>
            <title>MF Planejados</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            <link rel="icon" href="/logo.png" />
         </Head>

         <Box fullWidth sx={styles.container}>
            <HeaderMenu menuItems={menuItems} />
            <Box fullWidth sx={{ ...styles.containerSection }}>
               <Box sx={{ display: 'flex', width: '100%', height: { xs: 'auto', xm: 480, md: 480, lg: 735, xl: 968 }, }}>
                  <Box sx={{
                     position: 'absolute',
                     width: '100%',
                     height: { xs: 330, xm: 480, md: 480, lg: '100%' },
                     backgroundColor: 'rgba(0, 0, 0, 0.55)', // Cor preta com 55% de opacidade
                     zIndex: 999,
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     transition: 'opacity 0.3s ease-in-out', // Adiciona uma transição suave à mudança de texto
                  }}>
                     <Box
                        sx={{
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'center',
                           transition: 'opacity 0.3s ease-in-out', // Adiciona uma transição suave à mudança de texto
                           opacity: 1, // Mantém a opacidade inicial como 1
                           maxWidth: { xs: '90%', xm: '100%', md: '100%', lg: '100%' }
                        }}>
                        <Text veryLarge style={{ color: '#fff' }}>{displayText}</Text>
                     </Box>
                  </Box>
                  <Banner data={dataImages} />
               </Box>

            </Box>

            {navBar ?
               <Box sx={{
                  height: 'auto',
                  marginTop: 5,
                  marginBottom: 10,
                  padding: { xs: `20px`, xm: `25px`, md: `50px`, lg: `30px 80px 0px 80px` },
                  flexDirection: 'column',
                  justifyContent: { xs: `center`, xm: `center`, md: `flex-start`, lg: `flex-start` },
                  alignItems: 'center',
                  display: 'flex',
               }}>
                  <Box sx={{ display: 'flex', gap: 4, alignItems: 'center', margin: '15px 0px' }}>
                     <Box sx={{ display: 'flex', height: '40px', width: 6, backgroundColor: Colors.red }} />
                     <Text veryLarge>AMBIENTES PLANEJADOS</Text>
                  </Box>
                  <Box sx={{
                     display: 'flex', gap: 2, marginTop: 2, marginBottom: 5,
                     flexWrap: { xs: `wrap`, xm: `nowrap`, md: `nowrap`, lg: `nowrap` },
                  }}>
                     {Array.from(new Set(dataImages?.filter(item => item.section === 'Ambientes')?.map(item => item?.category))).map((uniqueCategory, index) => {
                        const selected = uniqueCategory === ambientSelected;

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
                           }} onClick={() => setAmbientSelected(uniqueCategory)}>
                              <Text style={{ color: selected ? '#fff' : 'inherit' }}>{uniqueCategory}</Text>
                           </Box>
                        );
                     })}
                  </Box>
                  <Carousel data={dataImages} section="Ambientes" />
               </Box>
               :
               <Box sx={{
                  height: 'auto',
                  marginTop: 5,
                  marginBottom: 10,
                  padding: { xs: `20px`, xm: `25px`, md: `50px`, lg: `30px 80px 0px 80px` },
                  flexDirection: 'column',
                  justifyContent: { xs: `center`, xm: `center`, md: `flex-start`, lg: `flex-start` },
                  alignItems: 'center',
                  display: 'flex',
               }}>
                  <Box sx={{ display: 'flex', gap: 4, alignItems: 'center', margin: '15px 0px' }}>
                     <Box sx={{ display: 'flex', height: '40px', width: 6, backgroundColor: Colors.red }} />
                     <Text veryLarge>AMBIENTES PLANEJADOS</Text>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2, marginTop: 2, marginBottom: 5 }}>
                     {Array.from(new Set(dataImages?.filter(item => item.section === 'Galeria')?.map(item => item?.category))).map((uniqueCategory, index) => {
                        const selected = uniqueCategory === ambientSelected;

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
                           }} onClick={() => setAmbientSelected(uniqueCategory)}>
                              <Text style={{ color: selected ? '#fff' : 'inherit' }}>{uniqueCategory}</Text>
                           </Box>
                        );
                     })}
                  </Box>
                  {/* <Carousel data={dataImages} /> */}
                  <Box sx={{ display: 'flex', gap: 2, maxWidth: '100%', flexWrap: 'wrap', position: 'relative', justifyContent: 'center' }}>
                     {photosToShow.map((item, index) => (
                        <ContentContainer gap={2} key={index} style={{ padding: '8px 8px', display: 'flex', alignItems: 'center' }}>
                           <Box
                              sx={{
                                 ...styles.imgGalery,
                                 backgroundImage: `url('${item.url}')`,
                                 backgroundSize: { xs: `cover`, xm: 'contain', md: 'cover', lg: 'cover' },
                                 width: { xs: `350px`, xm: `280px`, md: `280px`, lg: `280px` },
                                 height: { xs: '300px', xm: '250px', md: '250px', lg: '250px' },
                                 margin: '10px',
                                 "&:hover": {
                                    opacity: 0.8,
                                    cursor: 'pointer',
                                    transition: '.5s'
                                 }
                              }}
                           />
                           <Text large bold>{item?.category}</Text>
                        </ContentContainer>
                     ))}

                  </Box>

                  <Box sx={{ marginTop: 5 }}>
                     <Button onClick={() => router.push('/ambients')} text="Ver Mais" />
                  </Box>
               </Box>}

            <SectionAbout data={dataImages} />

            <Box sx={{ display: 'flex', width: '100%', height: { xs: 'auto', xm: 480, md: 480, lg: 735, xl: 968 }, marginTop: 10, marginBottom: 10 }}>
               <Box sx={{
                  position: { xs: 'relative', xm: 'relative', md: 'absolute', lg: 'absolute' },
                  backgroundImage: `url('/img/mf_inteligente.png')`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center', width: { xs: '100%', xm: '90%', md: '90%', lg: '100%' },
                  height: { xs: '700px', xm: '90%', md: '90%', lg: '100%' }
               }} />
               <SectionDevelopment />
            </Box>

            <Box sx={{
               width: '100%', display: 'flex', justifyContent: 'center',
               height: { xs: 'auto', xm: 'auto', md: 'auto', lg: 'auto', xl: 'auto' }, marginTop: 10,
               marginBottom: 20,
               padding: { xs: `20px`, xm: `25px`, md: `50px`, lg: `30px 80px 0px 80px` },
               flexDirection: 'column',
               justifyContent: 'flex-start',
               alignItems: 'center',
               display: 'flex',
            }}>
               <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', height: '40px', width: 6, backgroundColor: Colors.red }} />
                  <Text veryLarge>ALGUNS DE NOSSOS PARCEIROS</Text>
               </Box>
               <Box sx={{ display: 'flex', gap: 2, maxWidth: '90%', flexWrap: 'wrap', position: 'relative', marginTop: 10, justifyContent: 'center' }}>
                  {parceiros.map((item, index) => (
                     <Box key={index} sx={{ padding: '8px 8px', display: 'flex', alignItems: 'center' }}>
                        <Box
                           sx={{
                              ...styles.imgGalery,
                              backgroundImage: `url('${item.imagem}')`,
                              width: { xs: `200px`, xm: `280px`, md: `280px`, lg: `200px` },
                              height: { xs: '200px', xm: '250px', md: '250px', lg: '180px' },
                              margin: '10px',
                              "&:hover": {
                                 opacity: 0.8,
                                 cursor: 'pointer',
                                 transition: '.5s',
                                 transform: 'scale(1.1)'
                              }
                           }}
                        />
                     </Box>
                  ))}

               </Box>
            </Box>

            <Box sx={{
               height: 'auto',
               marginBottom: 10,
               // padding: { xs: `20px`, xm: `25px`, md: `50px`, lg: `0px 80px 0px 80px` },
            }}>
               <SectionProjects data={dataImages} />
            </Box>


            <Box sx={{
               width: '100%',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               height: 'auto',
               flexDirection: 'column',
               gap: 1,
               padding: { xs: `40px`, xm: `25px`, md: `50px`, lg: `0px 80px 0px 80px` },
            }}>
               <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Box sx={{ display: 'flex', height: '40px', width: 6, backgroundColor: Colors.red, marginRight: 1 }} />
                  <Text veryLarge>Depoimentos de Clientes</Text>
               </Box>
               <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: `column`, xm: `column`, md: `row`, lg: `row` } }}>
                  <Box sx={{
                     display: 'flex',
                     height: 'auto',
                     alignItems: 'center',
                     justifyContent: 'center',
                     position: 'relative',
                     marginTop: 10,
                     gap: 5,
                     flexDirection: { xs: `column`, xm: `column`, md: `row`, lg: `row` },
                     // overflow: 'hidden'
                  }}>
                     <Box sx={{
                        display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap',
                        maxWidth: { xs: 300, xm: 380, md: 500, lg: 500 }
                     }}>
                        <Text light title style={{ maxWidth: 500, textAlign: 'center' }}>
                           Veja o que nossos clientes estão falando sobre o jeito que a MF Planejados realizam seus sonhos!
                        </Text>
                        <Box sx={{ marginTop: 5, maxWidth: { xs: 200, xm: 200, md: 500, lg: 500 } }}>
                           <Button onClick={() => router.push('/ambients')} text="De uma olhada nos projetos" />
                        </Box>
                     </Box>
                     <Box sx={{
                        width: '100%', maxWidth: { xs: 200, xm: 200, md: 500, lg: 500 }, margin: 'auto',
                        padding: { xs: `0px 10px`, xm: `10px`, md: `10px`, lg: `10px` },
                     }}>
                        <Slider ref={sliderRef} {...settings}>
                           {testimonials?.map((item) => (
                              <Box
                                 key={item._id}
                                 sx={{
                                    minHeight: '350px',
                                    boxShadow: `rgba(149, 157, 165, 0.17) 0px 6px 24px`,
                                    gap: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    padding: '0px 25px'
                                    // Remova margin: 5
                                 }}
                              >
                                 <Text bold style={{ fontSize: 50, color: 'red' }}>
                                    "
                                 </Text>
                                 <Text light style={{ textAlign: 'center', marginTop: 5 }}>
                                    "{item?.message}"
                                 </Text>
                                 <Text bold style={{ textAlign: 'center', marginTop: 5 }}>
                                    {item?.clientName}
                                 </Text>
                              </Box>
                           ))}
                        </Slider>
                        <Box sx={{ display: 'flex', gap: 2, marginTop: 2, width: '100%', justifyContent: 'center' }}>
                           <Button onClick={handlePrev} text="Anterior" style={{ width: 100 }} />
                           <Button onClick={handleNext} text="Próxima" style={{ width: 100 }} />
                        </Box>
                     </Box>
                  </Box>
               </Box>
            </Box>



            <Box sx={{
               width: '100%', display: 'flex', justifyContent: 'center',
               height: { xs: 'auto', xm: 480, md: 480, lg: 600 }, marginTop: 10,
               margin: '30px 0px 0px 0px',
               padding: { xs: `60px`, xm: `25px`, md: `50px`, lg: `30px 80px 0px 80px` },
               flexDirection: 'column',
               justifyContent: 'flex-start',
               alignItems: 'center',
               display: 'flex',
               gap: 5,
               backgroundColor: '#f0f0f0'
            }}>
               <Box sx={{
                  display: 'flex', gap: 1, alignItems: 'center',
                  flexDirection: { xs: `column`, xm: `column`, md: `row`, lg: `row` },
               }}>
                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', }}>
                     <Box sx={{ display: 'flex', height: '40px', width: 6, backgroundColor: Colors.red, marginRight: 1 }} />
                     <Text veryLarge>Podemos ajudar a realizar</Text>
                  </Box>
                  <Text veryLarge bold style={{ color: Colors.red }}>Seu Sonho?</Text>
               </Box>
               <Text light style={{ maxWidth: 500, textAlign: 'center' }}>Nos conte mais sobre o seu Projeto, para entendermos melhor a sua necessidade, que entraremos
                  em contato para atende-los da melhor forma!</Text>

               <Box sx={{ width: { xs: '100%', xm: '100%', md: '100%', lg: '100%' }, alignItems: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                  <Box sx={{ width: { xs: '100%', xm: '100%', md: '100%', lg: '80%' }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                     <Box sx={{ display: 'flex', gap: 4 }}>
                        <TextInput
                           placeholder='João Silva'
                           variant="standard"
                           label="Seu Nome"
                           value={budget?.name || ''}
                           onChange={handleChange}
                           name='name'
                           margin='none'
                           fullWidth
                           InputProps={{
                              style: {
                                 fontSize: 14,
                                 margin: '0px 0px 10px 0px'
                              }
                           }}
                        />
                        <TextInput
                           label="Seu E-mail"
                           placeholder='joão.silva@outlook.com'
                           value={budget?.email || ''}
                           onChange={handleChange}
                           name='email'
                           variant="standard"

                           margin='none'
                           fullWidth
                           InputProps={{
                              style: {
                                 fontSize: 14,
                                 outline: 'none',
                                 margin: '0px 0px 10px 0px'
                              }
                           }}
                        />
                     </Box>
                     <Box sx={{ display: 'flex', gap: 4 }}>
                        <TextInput
                           placeholder='(11) 91234-5678'
                           label="Seu Telefone"

                           variant="standard"
                           value={budget?.telephone || ''}
                           onChange={handleChange}
                           name='telephone'
                           margin='none'
                           type="tel"
                           fullWidth
                           InputProps={{
                              style: {
                                 fontSize: 14,
                                 outline: 'none',
                                 margin: '0px 0px 10px 0px',
                              }
                           }}
                        />
                        <TextInput
                           placeholder='Assunto'
                           label="Assunto"
                           variant="standard"
                           value={budget?.subject || ''}
                           onChange={handleChange}
                           name='subject'
                           margin='none'
                           fullWidth
                           InputProps={{
                              style: {
                                 fontSize: 14,
                                 margin: '0px 0px 10px 0px'
                              }
                           }}
                        />
                     </Box>
                     <TextInput
                        placeholder='Mensagem'
                        value={budget?.message || ''}
                        variant="standard"
                        label="Menssagem"

                        onChange={handleChange}
                        name='message'
                        margin='none'
                        fullWidth
                        multiline
                        minRows={5}
                        maxRows={8}
                        InputProps={{
                           style: {
                              fontSize: 14,
                              margin: '0px 0px 10px 0px'
                           }
                        }}
                     />


                  </Box>
                  <Button text="Enviar" style={{ width: '200px', marginTop: 8 }} onClick={() => handleSendBudget()} />
               </Box>

            </Box>

            <Footer />
         </Box >
      </>
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
      marginTop: { xs: 0, xm: 10, md: 10, lg: 0 },
      left: 0,
      width: '100%',
      height: 'auto'
   },
   textHeader: {
      color: '#fff'
   },
   imgGalery: {
      backgroundSize: { xs: `contain`, xm: 'contain', md: 'cover', lg: 'cover' },
      backgroundRepeat: 'no-repeat',
      // backgroundPosition: 'center center',
      // overflow: 'hidden',
      marginBottom: 3,
   },

}
