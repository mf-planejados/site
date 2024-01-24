import React, { useEffect, useState } from "react"
import { Box, ContentContainer, Text, TextInput } from "../../atoms"
import { api } from "../../api/api";
import { Colors } from "../../organisms";
import { Footer } from "../../organisms/layout/footer";
import { useAppContext } from "../../context/AppContext";
import { Pagination, PaginationItem } from "@mui/material";
import { useRouter } from "next/router";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from "next/link";

export default function ProductsId() {
    const [product, setProducts] = useState([])
    const router = useRouter()
    const { id } = router.query;
    const [filterData, setFilterData] = useState('')
    const [thumb, setThumb] = useState()
    const { setLoading } = useAppContext()

    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedSlide, setSelectedSlide] = useState(0);


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2, // Mostra até 3 slides no carrossel pequeno abaixo
        slidesToScroll: 1,
        beforeChange: (current, next) => setCurrentSlide(next),

    };

    const handleThumbnailClick = (index) => {
        setSelectedSlide(index);
    };

    const filter = (item) => {
        const normalizeString = (str) => {
            return str?.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        };

        const normalizedFilterData = normalizeString(filterData);

        return (

            normalizeString(item?.name)?.toLowerCase().includes(normalizedFilterData?.toLowerCase()) ||
            normalizeString(item?.description)?.toLowerCase().includes(normalizedFilterData?.toLowerCase())
        );
    };

    const getProducts = async () => {
        setLoading(true)
        try {
            const response = await api.get(`/product/${id}`);
            const { data } = response
            setProducts(data)
            let [thumb] = data?.files?.map(item => item);
            setThumb(thumb)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    return (
        <>
            <Box>
                <Box
                    sx={{
                        marginTop: { xs: 5, xm: 5, md: 5, lg: 2 },
                        marginBottom: 10,
                        width: '100%',
                        padding: { xs: '0px 10px', xm: '10px', md: '10px', lg: '20px 40px' },
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            margin: '10px 0px',
                            '&:hover': {
                                opacity: 0.8,
                                cursor: 'pointer',
                                transition: '.5s',
                            },
                        }}
                        onClick={() => router.push('/product')}
                    >
                        <Text bold>{'<- Voltar'}</Text>
                    </Box>
                    <Box sx={{
                        gap: 4, display: 'flex',
                        flexDirection: { xs: 'column', xm: 'column', md: 'row', lg: 'row' },
                    }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '100%',
                                alignItems: 'center',
                                gap: 2,
                            }}
                        >
                            {product?.files &&
                                <Box sx={{
                                    width: '100%',
                                    height: { xs: '280px', xm: '400px', md: '400px', lg: '400px' },
                                }}>
                                    <img
                                        src={product.files[selectedSlide]?.url}
                                        alt={`Product Image ${selectedSlide + 1}`}
                                        style={{
                                            width: '100%',
                                            height: '100%', objectFit: 'contain',
                                            border: '1px solid #f0f0f0',
                                        }}
                                    />
                                </Box>
                            }
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                {product?.files?.map((file, index) => (
                                    <div key={index} onClick={() => handleThumbnailClick(index)}>
                                        <img
                                            src={file.url}
                                            alt={`Product Image ${index + 1}`}
                                            style={{
                                                width: '120px',
                                                height: '80px',
                                                objectFit: 'contain',
                                                border: `1px solid ${index === selectedSlide ? '#000' : '#f0f0f0'}`,
                                                cursor: 'pointer',
                                            }}
                                        />
                                    </div>
                                ))}
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 4,
                                padding: '10px 20px',
                                justifyContent: 'flex-start',
                                alignItems: 'start',
                                width: '100%',
                            }}
                        >
                            <Box>
                                <Text title bold>
                                    {product?.name}
                                </Text>
                                <Text light small>Código do produto: {id}</Text>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 2 }}>

                                <Text bold title>{formatter.format(product?.price)}</Text>
                                <Box sx={{
                                    display: 'flex', backgroundColor: product?.stock > 0 ? 'green' : 'red', padding: '8px 12px',
                                    alignItems: 'center', justifyContent: 'center',
                                    borderRadius: 2
                                }}>
                                    <Text small style={{ color: '#fff' }}>{product?.stock > 0 ? 'Disponível' : 'Indisponível'}</Text>
                                </Box>
                            </Box>
                            <Box>
                                <Text light>Por enquanto, estamos fechando a compra via WhatsApp.</Text>
                            </Box>
                            <Box sx={{ display: 'flex', marginTop: 4, flexDirection: 'column' }}>
                                <Text>Entre em contato conosco e feche sua compra!</Text>
                                <Link href={'https://wa.me/5511940718032?text=Ol%C3%A1%2C+gostaria+de+solicitar+um+or%C3%A7amento'} target="_blank">
                                    <Box sx={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        border: '1px solid green',
                                        padding: '5px 12px',
                                        borderRadius: 2,
                                        marginTop: 2,
                                        "&:hover": {
                                            cursor: 'pointer', opacity: 0.8
                                        }
                                    }}>
                                        <Box sx={{ ...styles.icon, backgroundImage: `url('/icons/whatsApp-icon.png')`, }} />
                                        <Text bold> Iniciar Conversa</Text>
                                    </Box>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1, marginTop: 10, flexDirection: 'column' }}>
                        <Text title bold>
                            Descrição do Produto
                        </Text>
                        <Text light>{product?.description}</Text>
                    </Box>
                </Box>
                <Footer />
            </Box>
        </>
    )
}

const styles = {
    container: {
        flex: 1,
    },
    cardComodo: {
        justifyContent: 'space-around',
        display: 'flex',
        // alignItems: 'center'
    },
    textCard: {
        textAlign: 'center'
    },
    containerGalery: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: { xs: `center`, xm: 'center', md: 'center', lg: 'center' },
        alignItems: 'center',
    },
    imgGalery: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // overflow: 'hidden',
        marginBottom: 3,
    },
    backgroundSlider: {
        backgroundColor: Colors.darkGray,
        width: '100%',
        height: '100%',
        position: 'absolute',
        opacity: .7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerSlide: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageCarouselLarge: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
        backgroundPosition: 'center center',
    },
    icon: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'contain',
        width: 30,
        height: 30,
        marginRight: 1.5,
        "&:hover": {
            cursor: 'pointer', opacity: 0.8
        }
    },
}
