import Image from "next/image";
import { Box, Button, Text } from "../../atoms";
import { Colors } from "../layout/Colors";
import { useRouter } from "next/router";
import { useMediaQuery, useTheme } from "@mui/material";
import { Carousel } from "../slider/slider";

const DevelopmentProcess = [
    {
        _id: '01',
        url: '/icons/atendente.png',
        name: 'Agendamento',
        option: true,
        category: 'Agendamento'
    },
    {
        _id: '02',
        url: '/icons/medição.png',
        name: 'Visita e medições',
        option: true,
        category: 'Visita e medições'
    },
    {
        _id: '03',
        url: '/icons/apresentacao_projeto.png',
        name: 'Apresentação do projeto',
        option: true,
        category: 'Apresentação do projeto'
    },
    {
        _id: '04',
        url: '/icons/fabricacao_moveis.png',
        name: 'Fabricação e montagem',
        option: true,
        category: 'Fabricação e montagem'
    },
    {
        _id: '05',
        url: '/icons/entrega_projeto.png',
        name: 'Entrega do projeto',
        option: false,
        category: 'Entrega do projeto'

    },

]

export const SectionDevelopment = () => {

    const router = useRouter()
    const theme = useTheme()
    const navBar = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <>
            <Box sx={{
                ...styles.container,
                position: 'absolute',
                width: '100%',
                height: { xs: '700px', xm: '100%', md: '100%', lg: '100%' },
                backgroundColor: 'rgba(0, 0, 0, 0.55)', // Cor preta com 55% de opacidade
                zIndex: 999,
                display: 'flex',
                alignItems: { xs: 'start', xm: 'center', md: 'center', lg: 'center' },
                justifyContent: 'center',
                transition: 'opacity 0.3s ease-in-out', // Adiciona uma transição suave à mudança de texto
            }}>
                <Box sx={{
                    flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // marginTop: { xs: 20, xm: 20, md: 0, lg: 0 },
                    transition: 'opacity 0.3s ease-in-out', // Adiciona uma transição suave à mudança de texto
                    opacity: 1, // Mantém a opacidade inicial como 1 }}>
                }}>
                    <Box sx={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: { xs: 7, xm: 2, md: 2, lg: 2 } }}>
                        <Box >
                            <Text veryLarge bold style={styles.title}>Etapas de desenvolvimento do seu sonho!</Text>
                        </Box>
                        <Box sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                            <Text large style={styles.text}>Nossa empresa conta com um processo de desenvolvimento bem planejado, desde o atendimento até a entrega. Contamos com uma enorme variedade de modelos, e orçamentos realizados presencialmente para melhor entendimento do seu sonho.</Text>
                        </Box>
                    </Box>

                    {navBar ?
                        <Box sx={{
                            position: 'absolute',
                            top: 430,
                            height: '100px',
                            width: '250px'
                        }}>
                            <Carousel data={DevelopmentProcess} filter={false} width={150} height={80} light/>
                        </Box>
                        :
                        <Box sx={{ width: '100%', display: 'flex', flexDirection: { xs: `column`, xm: 'row', md: 'row', lg: 'row' }, justifyContent: 'center', padding: { xs: '20px 100px', xm: '30px 180px 0px 180px', md: '30px 180px 0px 180px', lg: '30px 180px 0px 180px' } }}>
                            {DevelopmentProcess.map((item) => (
                                <>
                                    <Box sx={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }} key={item._id} >
                                        <Box sx={{
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: 'auto',
                                            // height: '90px',
                                            padding: '20px 0px',
                                            gap: 2
                                        }}>
                                            <Box sx={{
                                                backgroundSize: 'contain',
                                                backgroundRepeat: 'no-repeat',
                                                backgroundPosition: 'center center',
                                                backgroundImage: `url('${item.url}')`,
                                                color: '#fff',
                                                width: { xs: `150px`, xm: '250px', md: '250px', lg: '250px' },
                                                height: { xs: `80px`, xm: '80px', md: '100px', lg: '100px' },
                                                filter: 'brightness(0) invert(1)'
                                            }} />
                                        </Box>
                                        <Text style={{
                                            padding: '5px',
                                            width: '100%',
                                            textWeight: 'bold',
                                            color: '#fff',
                                            textAlign: 'center',
                                            marginBottom: { xs: `40px`, xm: '0px', md: '0px', lg: '0px' }

                                        }}>{item.name}</Text>
                                    </Box>
                                    {item.option == true ?
                                        <Box sx={{
                                            backgroundImage: `url('/icons/seta_direita.png')`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'center center',
                                            backgroundSize: 'contain',
                                            backgroundColor: 'transparent',
                                            padding: '15px',
                                            filter: 'brightness(0) invert(1)',
                                            display: { xs: `none`, xm: 'flex', md: 'flex', lg: 'flex' }
                                        }} />
                                        : ''}
                                </>
                            ))}
                        </Box>}
                    <Button text='Solicite seu orçamento' style={{ width: '300px', marginTop: { xs: `none`, xm: '30px', md: '30px', lg: '50px' } }}
                        onClick={() => router.push('/contact/contacts')} />
                </Box>
            </Box>
        </>
    )
}

const styles = {
    container: {
        // backgroundColor: Colors.darkGray,
        // marginTop: 10,
        left: 0,
        width: { xs: `auto`, xm: '100%', md: '100%', lg: '100%' },
        height: { xs: `auto`, xm: '430px', md: '430px', lg: '430px' },
        position: { xs: `relative`, xm: 'absolute', md: 'absolute', lg: 'absolute' },
        padding: { xs: `20px`, xm: '0px', md: '0px', lg: '0px' },
        borderRadius: { xs: `20px`, xm: '0px', md: '0px', lg: '0px' },
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        boxShadow: `rgba(149, 157, 165, 0.17) 0px 6px 24px`,
    },
    title: {
        textAlign: 'center',
        color: '#fff'
    },
    text: {
        textAlign: 'center',
        color: '#fff',
        padding: { xs: '20px 0px', xm: '30px 80px 0px 80px', md: '30px 80px 0px 80px', lg: '30px 80px 0px 80px' },
        width: { xs: `auto`, xm: '70%', md: '70%', lg: '70%' },
    },
    icon: {
        backgroundImage: `url('/logo.png')`,
        backgroundSize: 'contain',
        marginRight: 10,
        backgroundRepeat: 'no-repeat',
        height: 123,
        width: 250,
        left: 0,
    }
}