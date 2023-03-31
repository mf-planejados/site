import React, { Component } from "react";
import Slider from "react-slick";
import { Box, Text } from "../../atoms";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery, useTheme } from "@mui/material";

export const CarouselSlider = (props) => {

  const {
    data = [],
    slideShow = 0,
    text = false,
    autoplaySlide = false
  } = props;

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: slideShow,
    slidesToScroll: 1,
    autoplay: autoplaySlide,
    autoplaySpeed: 2500,
    pauseOnHover: true,
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
    <Box sx={styles.container}>
      <Slider {...settings}>
        {data?.map((item) => (
          <Box sx={{
            position: 'relative',
          }} key={item.id} >
            <Box sx={{ ...styles.imageCarousel, backgroundImage: `url('${item.url}')` }} />
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
  );
}

const styles = {
  container: {
    width: '100%',

  },
  imageCarousel: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: { xs: `100%`, xm: `320px`, md: `320px`, lg: `320px` },
    height: '300px',
    overflow: 'hidden',
  }
}
