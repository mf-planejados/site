

import React, { useState } from "react"
import { Box, Button, ContentContainer, Text, TextInput } from "../../atoms"
import { Footer } from "../../organisms/layout/footer"
import { useMediaQuery } from "@mui/material"
import { emailValidator, sendBudget } from "../../validators/api-requests"
import { useAppContext } from "../../context/AppContext"
import { Colors } from "../../organisms"

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
                <Box sx={{
                    width: '100%', display: 'flex', justifyContent: 'center',
                    height: { xs: 'auto', xm: 480, md: 480, lg: 600 }, marginTop: 10,
                    margin: '30px 0px 0px 0px',
                    padding: { xs: `60px`, xm: `25px`, md: `50px`, lg: `30px 80px 0px 80px` },
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    display: 'flex',
                    gap: 5,
                    backgroundColor: '#f0f0f0'
                }}>
                    <Box sx={{
                        display: 'flex', gap: 1, alignItems: 'center',
                        flexDirection: { xs: `column`, xm: `column`, md: `row`, lg: `row` },
                    }}>
                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', }}>
                            <Box sx={{ display: 'flex', height: '40px', width: 6, backgroundColor: Colors.red, marginRight: 1 }} />
                            <Text veryLarge>Podemos ajudar a realizar</Text>
                        </Box>
                        <Text veryLarge bold style={{ color: Colors.red }}>Seu Sonho?</Text>
                    </Box>
                    <Text light style={{ maxWidth: 500, textAlign: 'center' }}>Nos conte mais sobre o seu Projeto, para entendermos melhor a sua necessidade, que entraremos
                        em contato para atende-los da melhor forma!</Text>

                    <Box sx={{ width: { xs: '100%', xm: '100%', md: '100%', lg: '100%' }, alignItems: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                        <Box sx={{ width: { xs: '100%', xm: '100%', md: '100%', lg: '80%' }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                            <Box sx={{ display: 'flex', gap: 4 }}>
                                <TextInput
                                    placeholder='João Silva'
                                    variant="standard"
                                    label="Seu Nome"
                                    value={budget?.name || ''}
                                    onChange={handleChange}
                                    name='name'
                                    margin='none'
                                    fullWidth
                                    InputProps={{
                                        style: {
                                            fontSize: 14,
                                            margin: '0px 0px 10px 0px'
                                        }
                                    }}
                                />
                                <TextInput
                                    label="Seu E-mail"
                                    placeholder='joão.silva@outlook.com'
                                    value={budget?.email || ''}
                                    onChange={handleChange}
                                    name='email'
                                    variant="standard"

                                    margin='none'
                                    fullWidth
                                    InputProps={{
                                        style: {
                                            fontSize: 14,
                                            outline: 'none',
                                            margin: '0px 0px 10px 0px'
                                        }
                                    }}
                                />
                            </Box>
                            <Box sx={{ display: 'flex', gap: 4 }}>
                                <TextInput
                                    placeholder='(11) 91234-5678'
                                    label="Seu Telefone"

                                    variant="standard"
                                    value={budget?.telephone || ''}
                                    onChange={handleChange}
                                    name='telephone'
                                    margin='none'
                                    type="tel"
                                    fullWidth
                                    InputProps={{
                                        style: {
                                            fontSize: 14,
                                            outline: 'none',
                                            margin: '0px 0px 10px 0px',
                                        }
                                    }}
                                />
                                <TextInput
                                    placeholder='Assunto'
                                    label="Assunto"
                                    variant="standard"
                                    value={budget?.subject || ''}
                                    onChange={handleChange}
                                    name='subject'
                                    margin='none'
                                    fullWidth
                                    InputProps={{
                                        style: {
                                            fontSize: 14,
                                            margin: '0px 0px 10px 0px'
                                        }
                                    }}
                                />
                            </Box>
                            <TextInput
                                placeholder='Mensagem'
                                value={budget?.message || ''}
                                variant="standard"
                                label="Menssagem"

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
                                        margin: '0px 0px 10px 0px'
                                    }
                                }}
                            />


                        </Box>
                        <Button text="Enviar" style={{ width: '200px', marginTop: 8 }} onClick={() => handleSendBudget()} />
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