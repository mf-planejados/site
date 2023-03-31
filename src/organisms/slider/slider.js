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
                <CarouselSlider containerWidth={'95%'} data={image} showArrows slideShow={widthCarousel ? 6 : 5} text={true} width={250} height={180} controls />
            </Box>
        </>
    )
}

const styles = {
    container: {
        // backgroundColor: 'red',
        marginTop: 10,
        left: 0,
        width: { xs: `80%`, xm: `100%`, md: `100%`, lg: `100%` },
        marginLeft: { xs: `10%`, xm: `2.5%`, md: `2.5%`, lg: `2.5%` },
        height: '250px',
        position: 'absolute',
        alignItems: 'center',
        display: 'flex',
        // paddingLeft: { xs: '0px', sm: '0px', md: '22px', lg: 12 },
    },
}