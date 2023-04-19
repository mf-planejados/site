import React, { Component, useEffect, useState } from "react";
import { Box, ContentContainer, Text } from "../../atoms";
import { Colors } from "../layout/Colors";

export const Card = (props) => {

    const [showText, setShowText] = useState(false)

    function handleMouseOver() {
        setShowText(true)
    }

    function handleMouseLeave() {
        setShowText(false)
    }

    const {
        data = [],
        width = null,
        height = null,
    } = props;

    return (
        <>
            <Box sx={styles.container}>
                <Box sx={{ display: 'flex', flexDirection: { xs: `column`, xm: 'row', md: 'row', lg: 'row' }, gap: 1 }}>
                    {data.map((item, index) => (
                        <ContentContainer center key={index} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
                            <Box sx={{
                                ...styles.imageCarouselLarge,
                                backgroundImage: `url('${item?.url || '/img/sem-imagem.jpg'}')`,
                                width: { xs: `90%`, xm: width ? width : `220px`, md: width ? width : `220px`, lg: width ? width : `220px` },
                                height: { xs: '300px', xm: height ? height : '200px', md: height ? height : '200px', lg: height ? height : '200px' },
                                margin: 'auto',
                                borderRadius: 2,
                                cursor: 'pointer',
                                transition: '0.5s',
                                "&:hover": {
                                    opacity: 0.6,
                                    cursor: 'pointer',
                                    
                                 }
                            }} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} />
                            {showText ?
                                <Text title style={{
                                    position: 'absolute',
                                    backgroundColor: 'rgba(255,0,0,0.5)',
                                    opacity: 0.7,
                                    width: '80%',
                                    top: '50%',
                                    left: '50%',
                                    textWeight: 'bold',
                                    transform: 'translate(-50%, -50%)',
                                    color: '#fff',
                                    textAlign: 'center',
                                    opacity: 1,
                                    transition: 'opacity 0.5s ease',
                                }}>{item?.namePerfil}</Text>
                            : 
                            <Text title style={{
                                position: 'absolute',
                                backgroundColor: 'rgba(255,0,0,0.5)',
                                opacity: 0.7,
                                width: '80%',
                                top: '50%',
                                left: '50%',
                                textWeight: 'bold',
                                transform: 'translate(-50%, -50%)',
                                color: '#fff',
                                textAlign: 'center',
                                opacity: 0,
                                transition: 'opacity 2s ease',
                            }}>{item?.namePerfil}</Text>}
                            <Text large style={{ color: Colors.darkRed, borderBottom: `1px solid ${Colors.darkRed}`, width: 80, textAlign: 'center', padding: '0px 0px 10px 0px' }}>{item.level}</Text>
                        </ContentContainer>
                    ))}
                </Box>
            </Box>
        </>
    );
}

const styles = {
    container: {
        flex: 1,
         margin: 'auto'
    },
    imageCarouselLarge: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
        backgroundPosition: 'center center',
    },
}
