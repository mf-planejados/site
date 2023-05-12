import { Box, Text } from "../../atoms";
import { useEffect, useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { CarouselSlider } from "../carousel/Carousel";
import { getImages } from "../../validators/api-requests";

export const Banner = (props) => {

    const { data = [] } = props

    const [dataBanner, setDataBanner] = useState()
    const [section, setSection] = useState('Banner')

    useEffect(() => {
        if (data) {
            const filterImages = data?.filter(item => item.section === section)
            setDataBanner(filterImages)
        }
    }, [data])

    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                gap: 3,
                marginTop: { xs: `30px`, xm: '0px', md: '0px', lg: '0px' }
            }}>{dataBanner?.map((item) => (
                <Box sx={{
                    ...styles.imageHeader,
                    backgroundImage: `url(${item.url})`,
                }} />
            ))}
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
    imageHeader: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundImage: `url('https://mf-planejados.s3.us-east-1.amazonaws.com/a2799abb33672f85cc8cc68d357035db-home%2520page%2520marcenaria.jpeg')`,
        width: { xs: '300px', xm: '90%', md: '90%', lg: '90%' },
        height: { xs: '250px', xm: '90%', md: '90%', lg: '90%' }
     },
}