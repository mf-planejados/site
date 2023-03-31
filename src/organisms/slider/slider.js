import { Box, Text } from "../../atoms";
import { useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { CarouselSlider } from "../carousel/Carousel";

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
    {
        id: '05',
        url: '/comodos/area-externa.jpg',
        partHouse: 'Escritório'
    },
    {
        id: '05',
        url: '/comodos/area-externa.jpg',
        partHouse: 'Corporativo'
    },

]

export const Carousel = () => {

    const widthCarousel = useMediaQuery('(min-width:1536px)')

    return (
        <>
            <Box sx={styles.container}>
                <CarouselSlider data={image} slideShow={widthCarousel ? 5 : 4} text={true} />
            </Box>
        </>
    )
}

const styles = {
    container: {
        // backgroundColor: 'red',
        marginTop: 10,
        left: 0,
        width: '100%',
        height: '250px',
        position: 'absolute',
        alignItems: 'center',
        display: 'flex',
        // paddingLeft: { xs: '0px', sm: '0px', md: '22px', lg: 12 },
    },
}