import { Box, Text } from "../../atoms";
import { useEffect, useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { CarouselSlider } from "../carousel/Carousel";
import { getImages } from "../../validators/api-requests";

export const Carousel = (props) => {

    const { data = [], section = 'Ambientes', filter = true, slideShow = false, width = false, height = false, light = false } = props

    const [dataAmbients, setDataAmbients] = useState()

    useEffect(() => {
        if (data) {
            if (filter) {
                const filterImages = data?.filter(item => item.section === section)
                setDataAmbients(filterImages)
            } else {
                setDataAmbients(data)
            }
        }
    }, [data])

    const widthCarousel = useMediaQuery('(min-width:1536px)')
    const qntImages = dataAmbients?.legth

    return (
        <>
            <Box sx={styles.container}>
                {dataAmbients ?
                    <CarouselSlider containerWidth={'100%'} data={dataAmbients} showArrows slideShow={slideShow ? slideShow : widthCarousel ? qntImages > 6 ? 6 : 5 : 4} text={true} width={width ? width : 250} height={height ? height : 180} controls light={light}/>
                    : ''}
            </Box>
        </>
    )
}

const styles = {
    container: {
        left: 0,
        width: { xs: `90%`, xm: `100%`, md: `100%`, lg: `100%` },
        margin: ' 100px auto',
        height: 'auto',
        // position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
}