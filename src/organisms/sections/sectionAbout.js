import { Box, Text, ContentContainer } from "../../atoms";
import { Colors } from "../layout/Colors";

export const SectionAbout = (props) => {
    const { title = '',
        newButton = false,
        newButtonAction = () => { },
        saveButton = false,
        saveButtonAction = () => { },
        deleteButton = false,
        deleteButtonAction = () => { }
    } = props;

    return (
        <>
            <Box fullWidth sx={styles.container}>
                <ContentContainer styles={{ backgroundColor: 'red' }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '250px',
                        flex: 1,
                        gap: 1,

                    }}>
                        <Text title style={{
                            borderBottom: `1px solid ${Colors.darkRed}`,
                            color: Colors.darkRed,
                            fontWeight: 'bold',
                            width: 180,
                            textAlign: 'center',
                            paddingBottom: 10
                        }}>Sobre nós</Text>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 5,
                            width: '85%',
                            gap: 1
                        }}>

                            <Text>Fundada em 1989 pelo Sr. Vicente Crescencio da Fonseca, a MARCENARIA FONSECA possui sede própria na cidade de São Paulo, no bairro Jardim Alfredo,
                                onde atua com móveis planejados de acordo com a necessidade do cliente, focando sempre na excelência da qualidade dos serviços prestados.
                                Em 2001, Eder Moreira da Fonseca, assumiu a direção da marcenaria fundada pelo seu pai,
                                o Sr. Vicente, o qual expandiu os negócios montando uma filial em Senador Firmino, estado de Minas Gerais.
                            </Text>
                            <Text>
                                Hoje atuando no ramo de móveis planejados, com filosofia em satisfazer seus clientes,
                                procurando garantir a eles qualidade e acabamentos finos dos produtos, pontualidade e profissionais qualificados.
                                Desde sua fundação, a Marcenaria Fonseca possui autonomia em Móveis Planejados e Laqueação, sendo referência no mercado.
                            </Text>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '80%',
                            height: '500px',
                            gap: 3,
                        }}>
                            <Box sx={styles.imageSobre} />
                        </Box>
                    </Box>
                </ContentContainer>
            </Box>
        </>
    )
}

const styles = {
    container: {
        backgroundColor: '#fff',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        left: 0,
        width: '100%',
    },
    about: {
        height: 480
    },
    imageSobre: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundImage: `url('/sobre-image.jpeg')`,
        width: '90%',
        height: '100%'
    },
}