import { Box, Text } from "../../atoms";
import { useEffect, useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { CarouselSlider } from "../carousel/Carousel";
import { getImages } from "../../validators/api-requests";

export const Carousel = (props) => {

    const { data = [] } = props

    const [dataAmbients, setDataAmbients] = useState()
    const [section, setSection] = useState('Ambientes')

    useEffect(() => {
        if (data) {
            const filterImages = data?.filter(item => item.section === section)
            setDataAmbients(filterImages)
        }
    }, [data])

    const widthCarousel = useMediaQuery('(min-width:1536px)')
    const qntImages = dataAmbients?.legth

    return (
        <>
            <Box sx={styles.container}>
                {dataAmbients ?
                    <CarouselSlider containerWidth={'90%'} data={dataAmbients} showArrows slideShow={widthCarousel ? qntImages > 6 ? 6 : 5 : 4} text={true} width={250} height={180} controls />
                    : ''}
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
        marginLeft: { xs: `10%`, xm: `2.5%`, md: `2.5%`, lg: `5%` },
        height: '250px',
        position: 'absolute',
        alignItems: 'center',
        display: 'flex',
        // paddingLeft: { xs: '0px', sm: '0px', md: '22px', lg: 12 },
    },
}