import React from "react"
import { Box, ContentContainer, Text } from "../../atoms"

export default function Products() {

    return (
        <>
            <ContentContainer center fullWidth>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2, margin: 'auto'}}>
                    <Text title style={{ textAlign: 'center' }}>Está pagina está em construção</Text>
                    <Box sx={{
                        backgroundImage: `url('/icons/manutenção-icon.png')`,
                        backgroundSize: 'contain',
                        marginTop: 5,
                        marginBottom: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundRepeat: 'no-repeat',
                        height: 250,
                        width: 250,
                    }} />
                    <Text style={{ textAlign: 'center' }}>Estamos trabalhando para melhorar ainda mais sua experiência, e disponibilizar futuramente produtos a venda!</Text>
                </Box>
            </ContentContainer>
        </>
    )
}