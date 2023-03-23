import Image from "next/image";
import { Box, Text } from "../../atoms";
import { Colors } from "../layout/Colors";
import Slider from "react-slick";

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

export const Caroussel = () => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 0,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <Box sx={styles.container}>
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
                            display: 'block',
                            marginRight: 1,
                            opacity: 0.9,
                            filter: 'grayscale(100)',
                            "&:hover": {
                                opacity: 0.8,
                                filter: 'none',
                            }
                        }} />
                        <Text title style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            textWeight: 'bold',
                            transform: 'translate(-50%, -50%)',
                            color: '#fff',
                            textAlign: 'center',
                        }}>{item.partHouse}</Text>
                    </Box>
                ))
                }

            </Box>
        </>
    )
}

const styles = {
    container: {
        // backgroundColor: 'red',
        marginTop: 5,
        left: 0,
        width: '200%',
        height: '200px',
        position: 'absolute',
        // paddingLeft: { xs: '0px', sm: '0px', md: '22px', lg: 12 },
    },
}