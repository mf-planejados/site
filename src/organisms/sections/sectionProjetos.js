import Slider from "react-slick";
import { Box, Button, ContentContainer, Text } from "../../atoms";
import { CarouselSlider } from "../index";
import { Colors } from "../layout/Colors";
import { useMediaQuery } from "@mui/material";

const image = [
    {
        id: '01',
        url: '/comodos/sala.jpg',
        partHouse: 'Sala'
    },
    {
        id: '02',
        url: '/comodos/quarto.jpeg',
        partHouse: 'Quarto'
    },
    {
        id: '03',
        url: '/comodos/banheiro.jpg',
        partHouse: 'Banheiro'
    },
    {
        id: '04',
        url: '/comodos/cozinha.jpg',
        partHouse: 'Cozinha'
    },
    {
        id: '05',
        url: '/comodos/area-externa.jpg',
        partHouse: 'Espaço Externo'
    },

]

export const SectionProjects = () => {

    const widthCarousel = useMediaQuery('(min-width:1536px)')

    return (
        <>
            <Box fullWidth sx={styles.container}>
                <ContentContainer border styles={{ backgroundColor: 'pink', }}>
                    <Box sx={{ flexDirection: { xs: `column`, xm: 'row', md: 'row', lg: 'row' }, display: 'flex' }}>
                        <Box  sx={{width: { xs: `100%`, xm: '60%', md: '60%', lg: '60%' }}}>
                            <CarouselSlider data={image} slideShow={widthCarousel ? 3 : 2} autoplaySlide={true}/>
                        </Box>
                        <Box sx={{ padding: { xs: `40px 10px 10px 10px`, xm: '30px 10px 30px 30px', md: '30px 10px 30px 30px', lg: '30px 10px 30px 30px' }, alignItems: 'center', justifyContent: 'center', width: { xs: `100%`, xm: '50%', md: '50%', lg: '50%' }}}>
                            <Text title bold style={{
                                ...styles.text, padding: '0px 10px 5px 10px', borderBottom: `2px solid ${Colors.darkRed}`,
                                color: Colors.darkRed, width: '200px', margin: 'auto'
                            }}>Nossos projetos</Text>
                            <Text style={{ ...styles.text, padding: '30px 10px 5px 10px', }}> Nossa empresa conta com um processo de desenvolvimento bem planejado, desde o atendimento até a entrega.
                                Contamos com uma enorme variedade de modelos,
                                e orçamento feito presencialmente para melhor entendimento do seu sonho.</Text>
                            <Box sx={{ padding: '0px 40px 0px 40px', alignItems: 'center', justifyContent: 'center', }}>
                                <Button bold text='Conheça nossos projetos' style={{ alignItems: 'center', justifyContent: 'center', marginTop: 2 }} />
                            </Box>
                        </Box>
                    </Box>
                </ContentContainer>
            </Box>
        </>
    )
}

const styles = {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        padding: 5
    }
}