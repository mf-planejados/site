import React, { useEffect, useState } from "react"
import { Box, ContentContainer, Text, TextInput } from "../../atoms"
import { api } from "../../api/api";
import { Colors } from "../../organisms";
import { Footer } from "../../organisms/layout/footer";
import { useAppContext } from "../../context/AppContext";
import { Pagination, PaginationItem } from "@mui/material";
import { useRouter } from "next/router";

export default function Products() {
    const [products, setProducts] = useState([])
    const [filterData, setFilterData] = useState('')
    const { setLoading } = useAppContext()
    const router = useRouter()
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
            const response = await api.get('/products');
            const { data } = response
            setProducts(data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    const itemsPerPage = 10; // Número de itens por página
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products?.slice(indexOfFirstItem, indexOfLastItem);

    const handleChangePage = (event, page) => {
        setCurrentPage(page);
    };

    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    return (
        <>
            <Box sx={styles.container}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        backgroundColor: '#fff',
                        zIndex: 9999,
                        padding: '15px 0px',
                        marginTop: 1
                    }}>
                    <Box sx={{
                        ...styles.cardComodo, justifyContent: 'center',
                        marginTop: { xs: 5, xm: 5, md: 5, lg: 2 },
                        flexDirection: { xs: 'column', xm: 'row', md: 'row', lg: 'row' }
                    }}>
                        <Box sx={{
                            width: { xs: '80%', xm: '80%', md: '70%', lg: '100%' },
                            display: 'flex', gap: 4, alignItems: 'center', margin: '15px 0px', justifyContent: 'center',
                        }}>
                            <Box sx={{ display: 'flex', height: '40px', width: 6, backgroundColor: Colors.red }} />
                            <Text veryLarge>PRODUTOS A VENDA</Text>
                        </Box>
                        <Box sx={{
                            display: 'flex', gap: 1, width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff',
                            flexDirection: { xs: 'row', xm: 'row', md: 'row', lg: 'row' }
                        }}>
                            <TextInput
                                placeholder="Buscar pelo nome do produto.."
                                name='filterData'
                                type="search"
                                onChange={(event) => setFilterData(event.target.value)}
                                value={filterData}
                                sx={{ width: { xs: '50%', xm: '70%', md: '70%', lg: '70%' } }} />

                            <Pagination
                                count={Math.ceil(products.length / itemsPerPage)}
                                page={currentPage}
                                onChange={handleChangePage}
                                renderItem={(item) => (
                                    <PaginationItem
                                        component="div"
                                        {...item}
                                    />
                                )}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ marginTop: { xs: 5, xm: 5, md: 5, lg: 5 }, marginBottom: 10 }}>
                    <Box sx={{ ...styles.containerGalery, gap: 4 }}>

                        {products?.length < 1 ?
                            <>
                                <Box sx={{ alignItems: 'center', justifyContent: 'center', width: '80%' }}>
                                    <Text style={{ textAlign: 'center' }}>No momento não produtos a venda.</Text>
                                    <Text style={{ textAlign: 'center' }}>Estamos trabalhando para trazer mais projetos para você!</Text>
                                </Box>
                            </>
                            :
                            currentItems?.filter(filter)?.map((item, index) => {
                                const [thumb] = item?.files?.map(image => image);
                                const priceFormatted = formatter.format(item?.price)
                                const disponibility = item?.stock > 0;

                                return (
                                    <ContentContainer center key={index} style={{
                                        display: 'flex', width: 300,
                                        padding: '0px 0px 20px 0px',
                                        height: 450,
                                        overflow: 'hidden',
                                        border: '1px solid #f0f0f0',
                                        "&:hover": {
                                            opacity: 0.8,
                                            cursor: 'pointer',
                                            transition: '.5s',
                                            transform: 'scale(1.1, 1.1)'
                                        }
                                    }} onClick={() => router.push(`/product/${item?._id}`)}>
                                        <Box sx={{
                                            backgroundSize: 'cover',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundImage: `url('${thumb?.url}')`,
                                            width: { xs: `100%`, xm: `100%`, md: `100%`, lg: `100%` },
                                            height: { xs: '300px', xm: '250px', md: '250px', lg: '400px ' },
                                            "&:hover": {
                                                opacity: 0.8,
                                                cursor: 'pointer',
                                                transition: '.5s'
                                            }
                                        }
                                        } />
                                        <Box sx={{
                                            display: 'flex', gap: 2, flexDirection: 'column',
                                            padding: '10px 20px',
                                            justifyContent: 'flex-start',
                                            alignItems: 'start'
                                        }}>
                                            <Text>{item?.name}</Text>
                                            <Text bold large>{priceFormatted}</Text>
                                            <Text light>{item?.description}</Text>
                                        </Box>
                                        <Box sx={{
                                            display: 'flex', backgroundColor: disponibility ? 'green' : 'red', padding: '8px 12px',
                                            alignItems: 'center', justifyContent: 'center',
                                            borderRadius: 2
                                        }}>
                                            <Text small style={{ color: '#fff' }}>{disponibility ? 'Disponível' : 'Indisponível'}</Text>
                                        </Box>
                                    </ContentContainer>
                                )
                            })}
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
}