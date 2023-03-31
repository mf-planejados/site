import Image from "next/image";
import { Box, Text } from "../../atoms";
import { Colors } from "../layout/Colors";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { tooltipClasses, useMediaQuery, useTheme } from "@mui/material";

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

    const [showArrows, setShowArrows] = useState(true)
    const [left, setLeft] = useState(0)
    console.log(left)


    const theme = useTheme()
    const widthCarousel = useMediaQuery('(min-width:1536px)')
    const screenMobile = useMediaQuery('(min-width:600px)')
    console.log(screenMobile)

    
    return (
        <>
            <Box sx={styles.container}>
                <Box sx={{
                    left: '50%',
                    textWeight: 'bold',
                    transform: `translate(${left}%)`,
                    transition: '1s'
                }}>
                    {image.map((item) => (
                        <Box sx={{
                            display: 'inline-block',
                            position: 'relative',
                            "&:hover": {
                                cursor: 'pointer',
                            }
                        }} key={item.id} >
                            <Box sx={{
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundImage: `url('${item.url}')`,
                                width: '300px',
                                height: '200px',
                                display: 'flex',
                                marginRight: 1,
                                opacity: 0.9,
                                filter: 'grayscale(100)',
                                overflow: 'hidden',
                                "&:hover": {
                                    opacity: 0.8,
                                    filter: 'none',
                                }
                            }} />
                            <Text title style={{
                                position: 'absolute',
                                backgroundColor: '#0f0f0f',
                                opacity: 0.7,
                                width: '96.5%',
                                top: '50%',
                                left: '49%',
                                textWeight: 'bold',
                                transform: 'translate(-50%, -50%)',
                                color: '#fff',
                                textAlign: 'center',
                            }}>{item.partHouse}</Text>
                        </Box>
                    ))
                    }
                </Box>
                {showArrows ?
                    <>
                        <Box sx={{
                            justifyContent: 'space-between', width: { xs: '19.5%', sm: '33%', md: '33%', lg: '33%' },
                            alignItems: 'center', display: 'flex', left: 0, marginRight: 10, position: 'absolute',
                        }}>
                            <Box sx={{
                                ...styles.icon,
                                backgroundImage: `url('/icons/right-arrow.png')`,
                                transform: 'rotateY(180deg)',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'contain',
                                // backgroundColor: '#fff',
                                height: 30,
                                width: 50,
                                color: '#fff',
                                left: 0,
                                "&:hover": {
                                    cursor: 'pointer', opacity: 0.8
                                }
                            }} onClick={() => {

                                setLeft(screenMobile ? left < 0 ? left + 15 : 0 : left < 0 ? left + 14 : 0)
                                console.log('direita')
                            }
                            } />

                            <Box sx={{
                                ...styles.icon,
                                backgroundImage: `url('/icons/right-arrow.png')`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'contain',
                                backgroundColor: 'pink',
                                height: 30,
                                color: '#fff',
                                width: 30,
                                left: 0,
                                "&:hover": {
                                    cursor: 'pointer', opacity: 0.8
                                }
                            }} onClick={() => {
                                setLeft(screenMobile ? !widthCarousel ? left == -45 ? 0 : left - 15 : left == -15 ? 0 : left - 15 : left <= -84 ? 0 : left - 14)
                                console.log('esquerda')
                            }} />
                        </Box>
                    </> : ''
                }
            </Box>
        </>
    )
}

const styles = {
    container: {
        // backgroundColor: 'red',
        marginTop: 10,
        left: 0,
        width: { xs: '500%', sm: '300%', md: '300%', lg: '300%' },
        overflowY: 'hidden',
        height: '200px',
        position: 'absolute',
        alignItems: 'center',
        display: 'flex',
        // paddingLeft: { xs: '0px', sm: '0px', md: '22px', lg: 12 },
    },
}