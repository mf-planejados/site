import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import { Box, Text } from "../../atoms";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery, useTheme } from "@mui/material";

export const CarouselSlider = (props) => {



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


  const {
    data = [],
    slideShow = 0,
    slideShowThumb = 0,
    text = false,
    autoplaySlide = false,
    controls = false,
    width = null,
    height = null,
    showArrows = false,
    containerWidth = '100%',
    comodo = null,
    style = {},
    thumb = false,
    positionSelect = 0
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

  const [slider1, setSlider1] = useState(null)
  const [slider2, setSlider2] = useState(null)


  return (
    <>
      {thumb ?
        <>
          <Slider
            asNavFor={slider2}
            ref={(slider) => setSlider1(slider)}
          >
            {/* {data?.filter((item, index) => index == urlSelected).map((item, index) => ( */}
            {data?.map((item, index) => (
              <Box sx={{
                position: 'relative',
                alignItems: 'center',
              }} key={index} >
                <Box sx={{
                  ...styles.imageCarouselLarge,
                  backgroundImage: `url('${item?.url}')`,
                  width: { xs: `90%`, xm: width ? width : `320px`, md: width ? width : `320px`, lg: width ? width : `320px` },
                  height: { xs: '300px', xm: height ? height : '300px', md: height ? height : '300px', lg: height ? height : '300px' },
                  // marginLeft: { xs: `15%`, xm: `0px`, md: `0px`, lg: `0px` }
                  // marginLeft: thumb && '25%'
                  margin: 'auto'
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
                  }}>{item?.partHouse}</Text>
                  : ''}
              </Box>
            ))
            }
          </Slider>
          {data.length > 1 ? (
            <Slider
              asNavFor={slider1}
              focusOnSelect={true}
              ref={(slider) => setSlider2(slider)}
              slidesToShow={slideShowThumb}
              swipeToSlide={true}
              controls={false}
              arrows={false}
            >
              {
                data?.map((item) => (
                  <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    width: '90%',
                    flexDirection: 'row',
                    overflow: 'hidden',
                    justifyContent: { xs: `center`, xm: 'space-between', md: 'space-between', lg: 'space-between' },
                    // position: 'absolute'
                    marginTop: 2
                  }} key={item?.id} >
                    <Box sx={{
                      ...styles.imageCarouselLarge,
                      backgroundImage: `url('${item?.url}')`,
                      width: { xs: `100px`, xm: `150px`, md: `100px`, lg: `100px` },
                      height: { xs: '60px', xm: '60px', md: '60px', lg: '60px' },
                      margin: '10px 3px'
                      // marginLeft: { xs: `15%`, xm: `0px`, md: `0px`, lg: `0px` }
                    }} />
                  </Box>
                ))
              }
            </Slider>
          ) : null}
        </>
        :
        <Box sx={{ width: { xs: `100%`, xm: containerWidth, md: containerWidth, lg: containerWidth } }}>
          <Slider {...settings}>
            {data?.map((item) => (
              <Box sx={{
                position: 'relative',
                alignItems: 'center',
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
        </Box >
      }
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
