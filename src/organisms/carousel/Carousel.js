import React, { Component } from "react";
import Slider from "react-slick";
import { Box, Text } from "../../atoms";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery, useTheme } from "@mui/material";

export const CarouselSlider = ({ data }) => {

  const theme = useTheme()
  const widthCarousel = useMediaQuery('(min-width:1536px)')

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: widthCarousel ? 3 : 2,
    slidesToScroll: 1,
    autoplay: true,
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
          <Box key={item.id}>
            <Box sx={{ ...styles.imageCarousel, backgroundImage: `url('${item.url}')` }} />
          </Box>
        ))
        }
      </Slider>
    </Box >
  );
}

const styles = {
  container: {
    width: {xs:`100%`, xm: `60%`, md: `60%`,lg: `60%`},
    
  },
  imageCarousel: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: {xs:`100%`, xm: `320px`, md: `320px`,lg: `320px`},
    height: '300px',
    overflow: 'hidden',
  }
}
