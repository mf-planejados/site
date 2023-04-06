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
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Box sx={{ ...styles.icon, backgroundImage: `url('/icons/whatsApp-icon.png')`, }} />
                            <Text bold style={{ ...styles.text }}> Converse pelo chat</Text>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Box sx={{ ...styles.icon, backgroundImage: `url('/icons/instagram-icon.png')`, }} />
                            <Text bold style={{ ...styles.text }}> @m.f.planejados</Text>
                        </Box>
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
                        <Text title style={{ ...styles.text }}>Venha nos visitar</Text>
                        <Box sx={{ width: '200px', height: '130px' }}>
                        <Box sx={{ ...styles.icon, backgroundImage: `url('/maps-icon.png')`, width: '100%', height: '100%'}} />
                        </Box>
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
        justifyContent: 'space-around',
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