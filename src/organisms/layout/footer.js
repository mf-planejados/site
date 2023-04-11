import { useMediaQuery, useTheme } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { Box, ContentContainer, Text } from "../../atoms"
import { Colors } from "./Colors"

export const Footer = ({ menuItems = [] }) => {

    const router = useRouter()

    return (
        <>
            <Box sx={styles.container}>
                <Box sx={styles.containerBox}>
                    <ContentContainer style={{
                        alignItems: 'center',
                        display: 'flex',
                        boxShadow: 'none',
                        justifyContent: 'center',
                        backgroundColor: 'none'
                    }}>
                        <Text title style={{ ...styles.text }}>Contatos</Text>
                        <Text style={{ ...styles.text }}>Entre em contato conosco para mais informações:</Text>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Box sx={{ ...styles.icon, backgroundImage: `url('/icons/email-icon.png')`, }} />
                            <Text bold style={{ ...styles.text, }}> edermarce1@yahoo.com.br</Text>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Box sx={{ ...styles.icon, backgroundImage: `url('/icons/tel-icon.png')`, }} />
                            <Text bold style={{ ...styles.text }}> +55 (11) 94071-8032</Text>
                        </Box>
                    </ContentContainer>
                </Box>
                <Box sx={styles.containerBox}>
                    <ContentContainer style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        boxShadow: 'none',
                        backgroundColor: 'none'
                    }}>
                        <Text title style={{ ...styles.text, }}>Redes Sociais</Text>
                        <Text style={{ ...styles.text }}>Venha conferir:</Text>
                        <Link href={'https://wa.me/5511940718032?text=Ol%C3%A1%2C+gostaria+de+solicitar+um+or%C3%A7amento'} onClick={() => { }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Box sx={{ ...styles.icon, backgroundImage: `url('/icons/whatsApp-icon.png')`, }} />
                                <Text bold style={{ ...styles.text }}> Converse pelo chat</Text>
                            </Box>
                        </Link>
                        <Link href={'https://www.instagram.com/m.f.planejados/'} onClick={() => { }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Box sx={{ ...styles.icon, backgroundImage: `url('/icons/instagram-icon.png')`, }} />
                                <Text bold style={{ ...styles.text }}> @m.f.planejados</Text>
                            </Box>
                        </Link>


                    </ContentContainer>
                </Box>
                <Box sx={styles.containerBox}>
                    <ContentContainer style={{
                        alignItems: 'center',
                        display: 'flex',
                        boxShadow: 'none',
                        justifyContent: 'center',
                        backgroundColor: 'none',
                    }}>
                        <Text title style={{ ...styles.text, }}>Venha nos visitar</Text>
                        <Text style={{ ...styles.text, margin: '25px 0px 25px 0px',  }}>Faça uma visita em nosso escritório:</Text>
                        <Link href={"https://www.google.com.br/maps/place/Av.+Guarapiranga,+3300+-+Jardim+Sao+Joaquim,+S%C3%A3o+Paulo+-+SP/@-23.6853672,-46.7522377,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce521f101e6d9b:0x729cd0bad6f0b200!8m2!3d-23.6853721!4d-46.750049"} onClick={() => { }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Box sx={{ ...styles.icon, backgroundImage: `url('/icons/maps_icon.png')`, }} />
                                <Text bold style={{ ...styles.text }}> AV. Guarapiranga, 3.300 – JD. Alfredo</Text>
                            </Box>
                        </Link>
                    </ContentContainer>
                </Box>
                <Box sx={{
                    backgroundColor: 'pink', width: '100%', height: 30, backgroundColor: Colors.background, display: 'flex', position: 'absolute', bottom: 0, alignItems: 'center',
                    justifyContent: 'center', marginTop: 5
                }}>
                    <Text style={{ textAlign: 'center', color: 'darkGray' }}>Criado por Marcus-devfs @ 2023 Todos os direitos reservados</Text>
                </Box>
            </Box>

        </>
    )
}


const styles = {
    container: {
        position: 'absolute',
        height: { xs: `145%`, xm: '50%', md: '50%', lg: '50%' },
        width: '100%',
        backgroundColor: Colors.background,
        zIndex: 999,
        alignItems: 'center',
        justifyContent: { xs: `center`, xm: 'space-around', md: 'space-around', lg: 'space-around' },
        left: 0,
        right: 0,
        display: 'flex',
        flexDirection: { xs: `column`, xm: 'row', md: 'row', lg: 'row' }
    },
    containerBox: {
        height: '100%',
        display: 'flex',
        // alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px',
        marginBottom: 5
    },
    text: {
        textAlign: 'center',
        marginTop: '5px'
    },
    icon: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'contain',
        width: 30,
        height: 30,
        marginTop: 1,
        marginRight: 1.5,
        "&:hover": {
            cursor: 'pointer', opacity: 0.8
        }
    },

}