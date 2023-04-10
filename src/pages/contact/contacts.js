

import React, { useState } from "react"
import { Box, Button, ContentContainer, Text, TextInput } from "../../atoms"
import { Footer } from "../../organisms/layout/footer"
import { useMediaQuery } from "@mui/material"

export default function Contacts() {

    const [orçamento, setOrçamento] = useState({})

    const handleChange = (value) => {

        if (value.target.name == 'telephone')
        {
            const regex = /^\(?([0-9]{2})\)?([0-9]{4,5})\-?([0-9]{4})$/mg;
            let str = value.target.value.replace(/[^0-9]/g, "").slice(0, 11);
            value.target.value = str.replace(regex, "($1)$2-$3")
        }

        setOrçamento((prevValues) => ({
            ...prevValues,
            [value.target.name]: value.target.value,
        }))
    }

    const widthLarge = useMediaQuery('(min-width:1536px)')

    return (
        <>
            <Box>
                <Box sx={{ height: widthLarge ? 800 : 'auto', padding: 5}}>
                    <Box sx={{ ...styles.imageHeader, padding: { xs: 2, xm: 5, md: 5, lg: 5 } }}>
                        <ContentContainer center style={{ width: { xs: '100%', xm: '50%', md: '50%', lg: '50%' }, height: '100%', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                            <Text title style={{ color: '#fff', marginTop: 30, textAlign: 'center' }}>CONTATO/ORÇAMENTO</Text>
                            <Text style={{ color: '#fff', marginTop: 20, width: '70%', textAlign: 'center' }}>Para duvidas, sugestões e melhorias, entre em contato conosco. Faça seu orçamento sem comprimisso!</Text>
                            <Box sx={{ width: '80%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                                <TextInput
                                    placeholder='João Silva'
                                    value={orçamento?.name || ''}
                                    onChange={handleChange}
                                    name='name'
                                    margin='none'
                                    fullWidth
                                    InputProps={{
                                        style: {
                                            fontSize: 14,
                                            backgroundColor: '#fff',
                                            margin: '0px 0px 10px 0px'
                                        }
                                    }}
                                />
                                <TextInput
                                    placeholder='joão.silva@outlook.com'
                                    value={orçamento?.email || ''}
                                    onChange={handleChange}
                                    name='email'
                                    margin='none'
                                    fullWidth
                                    InputProps={{
                                        style: {
                                            fontSize: 14,
                                            backgroundColor: '#fff',
                                            outline: 'none',
                                            margin: '0px 0px 10px 0px'
                                        }
                                    }}
                                />
                                <TextInput
                                    placeholder='(11) 91234-5678'
                                    value={orçamento?.telephone || ''}
                                    onChange={handleChange}
                                    name='telephone'
                                    margin='none'
                                    type="tel"
                                    fullWidth
                                    InputProps={{
                                        pattern: '[0-9]*',
                                        style: {
                                            fontSize: 14,
                                            backgroundColor: '#fff',
                                            outline: 'none',
                                            margin: '0px 0px 10px 0px'
                                        }
                                    }}
                                />
                                <TextInput
                                    placeholder='Assunto'
                                    value={orçamento?.subject || ''}
                                    onChange={handleChange}
                                    name='subject'
                                    margin='none'
                                    fullWidth
                                    InputProps={{
                                        style: {
                                            fontSize: 14,
                                            backgroundColor: '#fff',
                                            margin: '0px 0px 10px 0px'
                                        }
                                    }}
                                />
                                <TextInput
                                    placeholder='Mensagem'
                                    value={orçamento?.message || ''}
                                    onChange={handleChange}
                                    name='message'
                                    margin='none'
                                    fullWidth
                                    multiline
                                    minRows={5}
                                    maxRows={8}
                                    InputProps={{

                                        style: {
                                            fontSize: 14,
                                            backgroundColor: '#fff',
                                        }
                                    }}
                                />


                            </Box>
                            <Button text="Enviar" style={{ width: '50%' }} />
                        </ContentContainer>
                    </Box>
                </Box>
                <Footer />
            </Box>
        </>
    )
}

const styles = {
    container: {
        // backgroundColor: '#fff',
        flex: 1
    },
    imageHeader: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundImage: `url('/header-image.jpeg')`,
        width: { xs: '100%', xm: '100%', md: '100%', lg: '100%' },
        height: { xs: '100%', xm: '100%', md: '100%', lg: '100%' }
    },
}