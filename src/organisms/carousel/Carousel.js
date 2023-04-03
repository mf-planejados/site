import React, { Component, useState } from "react";
import Slider from "react-slick";
import { Box, Text } from "../../atoms";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery, useTheme } from "@mui/material";

export const CarouselSlider = (props) => {

  const [urlSelected, setUrlSelected] = useState('')

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: showArrows ? "block" : 'none', filter: 'brightness(100) invert(1)' }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: showArrows ? "block" : 'none', filter: 'brightness(100) invert(1)' }}
        onClick={onClick}
      />
    );
  }

  function selectPhoto(url) {
    setUrlSelected(url)
  }

  const {
    data = [],
    slideShow = 0,
    text = false,
    autoplaySlide = false,
    controls = false,
    width = null,
    height = null,
    showArrows = false,
    containerWidth = '100%',
    comodo = null,
    style = {},
    thumb = false
  } = props;

  const settings = {
    dots: true,
    fade: thumb ? true : false,
    adaptiveHeight: thumb ? true : false,
    infinite: true,
    slidesToShow: slideShow,
    slidesToScroll: 1,
    autoplay: autoplaySlide,
    autoplaySpeed: 2500,
    controls: controls,
    pauseOnHover: true,
    showArrows: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };


  return (
    <>
      <Box sx={{ width: { xs: `100%`, xm: containerWidth, md: containerWidth, lg: containerWidth }}}>
        <Slider {...settings}>
          {data?.map((item) => (
            <Box sx={{
              position: 'relative',
              alignItems:'center',
            }} key={item.id} >
              <Box sx={{
                ...styles.imageCarouselLarge,
                backgroundImage: `url('${item.url}')`,
                width: { xs: `100%`, xm: width ? width : `320px`, md: width ? width : `320px`, lg: width ? width : `320px` },
                height: { xs: '220px', xm: height ? height : '300px', md: height ? height : '300px', lg: height ? height : '300px' },
                // marginLeft: { xs: `15%`, xm: `0px`, md: `0px`, lg: `0px` }
                marginLeft: thumb && '25%'
              }} />
              {text ?
                <Text title style={{
                  position: 'absolute',
                  backgroundColor: '#0f0f0f',
                  opacity: 0.7,
                  width: '50%',
                  top: '50%',
                  left: '50%',
                  textWeight: 'bold',
                  transform: 'translate(-50%, -50%)',
                  color: '#fff',
                  textAlign: 'center',
                }}>{item.partHouse}</Text>
                : ''}
            </Box>
          ))
          }
        </Slider>
        <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
          {thumb ?
            data?.map((item) => (
              <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                width: '90%',
                flexDirection: 'row',
                overflow: 'hidden',
                justifyContent: { xs: `center`, xm: 'space-between', md: 'space-between', lg: 'space-between' },
                // position: 'absolute'
              }} key={item.id} >
                <Box sx={{
                  ...styles.imageCarouselLarge,
                  backgroundImage: `url('${item.url}')`,
                  width: { xs: `100%`, xm: `150px`, md: `150px`, lg: `150px` },
                  height: { xs: '220px', xm: '60px', md: '60px', lg: '60px' },
                  margin: '3px'
                  // marginLeft: { xs: `15%`, xm: `0px`, md: `0px`, lg: `0px` }
                }}

                  onClick={() => selectPhoto(item.url)} />
              </Box>
            ))
            : ''}
        </Box>
      </Box >
    </>
  );
}

const styles = {
  container: {
    width: '100%',

  },
  imageCarouselLarge: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
    backgroundPosition: 'center center',
  },
}