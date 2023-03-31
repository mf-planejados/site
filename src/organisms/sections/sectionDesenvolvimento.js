import Image from "next/image";
import { Box, Button, Text } from "../../atoms";
import { Colors } from "../layout/Colors";

const DevelopmentProcess = [
    {
        id: '01',
        url: '/icons/atendente.png',
        name: 'Agendamento',
        option: true
    },
    {
        id: '02',
        url: '/icons/medição.png',
        name: 'Visita e medições',
        option: true
    },
    {
        id: '03',
        url: '/icons/apresentacao_projeto.png',
        name: 'Apresentação do projeto',
        option: true
    },
    {
        id: '04',
        url: '/icons/fabricacao_moveis.png',
        name: 'Fabricação e montagem',
        option: true
    },
    {
        id: '05',
        url: '/icons/entrega_projeto.png',
        name: 'Entrega do projeto',
        option: false
    },

]

export const SectionDevelopment = () => {

    return (
        <>
            <Box sx={styles.container}>
                <Box sx={{ flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Box sx={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Box >
                            <Text title bold style={styles.title}>Etapas de desenvolvimento do seu sonho!</Text>
                        </Box>
                        <Box sx={{alignItems: 'center', justifyContent: 'center', display: 'flex',}}>
                            <Text style={styles.text}>Nossa empresa conta com um processo de desenvolvimento bem planejado, desde o atendimento até a entrega. Contamos com uma enorme variedade de modelos, e orçamento feito presencialmente para melhor entendimento do seu sonho.</Text>
                        </Box>
                    </Box>

                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '30px 180px 0px 180px' }}>
                        {DevelopmentProcess.map((item) => (
                            <>
                                <Box sx={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }} key={item.id} >
                                    <Box sx={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: 'auto',
                                        height: '90px',
                                        
                                    }}>
                                        <Box sx={{
                                            backgroundSize: 'contain',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'center center',
                                            backgroundImage: `url('${item.url}')`,
                                            color: '#fff',
                                            width: '150px',
                                            height: '80px',
                                            filter: 'brightness(0) invert(1)'
                                        }} />
                                    </Box>
                                    <Text small style={{
                                        padding: '5px',
                                        width: '100%',
                                        textWeight: 'bold',
                                        color: '#fff',
                                        textAlign: 'center',
                                    }}>{item.name}</Text>
                                </Box>
                                {item.option == true ?
                                    <Box sx={{
                                        backgroundImage: `url('/icons/seta_direita.png')`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center center',
                                        backgroundSize: 'contain',
                                        backgroundColor: 'transparent',
                                        padding: '15px',
                                        filter: 'brightness(0) invert(1)'
                                    }} />
                                    : ''}
                            </>
                        ))}
                    </Box>
                    <Button text='Solicite seu orçamento' style={{width: '200px', marginTop: '30px'}}/>
                </Box>
            </Box>
        </>
    )
}

const styles = {
    container: {
        backgroundColor: Colors.darkGray,
        marginTop: 10,
        left: 0,
        width: '100%',
        height: '430px',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        boxShadow: `rgba(149, 157, 165, 0.17) 0px 6px 24px`,
    },
    title: {
        textAlign: 'center',
        color: '#fff'
    },
    text: {
        textAlign: 'center',
        color: '#fff',
        padding: '30px 80px 0px 80px',
        width: '70%',
    },
    icon: {
        backgroundImage: `url('/logo.png')`,
        backgroundSize: 'contain',
        marginRight: 10,
        backgroundRepeat: 'no-repeat',
        height: 123,
        width: 250,
        left: 0,
    }
}