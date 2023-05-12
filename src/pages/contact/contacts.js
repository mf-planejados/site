

import React, { useState } from "react"
import { Box, Button, ContentContainer, Text, TextInput } from "../../atoms"
import { Footer } from "../../organisms/layout/footer"
import { useMediaQuery } from "@mui/material"
import { emailValidator, sendBudget } from "../../validators/api-requests"
import { useAppContext } from "../../context/AppContext"

export default function Contacts() {

    const { alert, setLoading } = useAppContext()
    const [budget, setBudget] = useState({})
    const widthLarge = useMediaQuery('(min-width:1536px)')

    const handleChange = (value) => {

        if (value.target.name == 'telephone') {
            const regex = /^\(?([0-9]{2})\)?([0-9]{4,5})\-?([0-9]{4})$/mg;
            let str = value.target.value.replace(/[^0-9]/g, "").slice(0, 11);
            value.target.value = str.replace(regex, "($1)$2-$3")
        }

        setBudget((prevValues) => ({
            ...prevValues,
            [value.target.name]: value.target.value,
        }))
    }

    const handleSendBudget = async () => {

        const { name, email, telephone, subject, message } = budget

        console.log(budget)

        if (name == '') {
            return alert.error('O nome é obrigatório')
        }
        if (email == '') {
            alert.error('O email é obrigatório')
            return false
        }
        if (telephone == '') {
            alert.error('O telephone é obrigatório')
            return false
        }
        if (telephone.length < 10) {
            alert.error('O telephone está incorreto')
            return false
        }
        if (subject == '') {
            alert.error('O subject é obrigatório')
            return false
        }
        if (message == '') {
            alert.error('O message é obrigatório')
            return false
        }
        if (!email || !emailValidator(email)) {
            alert.error("O email está inválido!")
            return false
        }
        else {
            setLoading(true)
            try {
                const response = await sendBudget(budget)
                const { status } = response

                if (status === 201) {
                    alert.success('Orçamento enviado! Logo entraremos em contato com você!')
                    setBudget('')
                    return
                }

                alert.error('Tivemos um problema ao enviar o orçamento.');
                return null
            } catch (error) {
                alert.error('Tivemos um problema ao enviar o orçamento.');
                console.log(error)
                return null
            } finally {
                setLoading(false)
            }
        }
    }

    return (
        <>
            <Box>
                <Box sx={{ height: widthLarge ? 800 : 'auto', padding: { xs: 0, xm: 5, md: 5, lg: 5 } }}>
                    <Box sx={{ ...styles.imageHeader, padding: { xs: 0, xm: 5, md: 5, lg: 5 } }}>
                        <ContentContainer center style={{ width: { xs: '100%', xm: '50%', md: '50%', lg: '50%' }, height: '100%', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                            <Text title style={{ color: '#fff', marginTop: 30, textAlign: 'center' }}>CONTATO/ORÇAMENTO</Text>
                            <Text style={{ color: '#fff', marginTop: 20, width: '70%', textAlign: 'center' }}>Para duvidas, sugestões e melhorias, entre em contato conosco. Faça seu orçamento sem comprimisso!</Text>
                            <Box sx={{ width: { xs: '95%', xm: '80%', md: '80%', lg: '80%' }, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                                <TextInput
                                    placeholder='João Silva'
                                    value={budget?.name || ''}
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
                                    value={budget?.email || ''}
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
                                    value={budget?.telephone || ''}
                                    onChange={handleChange}
                                    name='telephone'
                                    margin='none'
                                    type="tel"
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
                                    placeholder='Assunto'
                                    value={budget?.subject || ''}
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
                                    value={budget?.message || ''}
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
                            <Button text="Enviar" style={{ width: '60%' }} onClick={() => handleSendBudget()} />
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