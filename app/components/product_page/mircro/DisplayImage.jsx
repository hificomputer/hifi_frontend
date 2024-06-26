'use client';

import { useState, useEffect, Fragment } from 'react';
import { Image } from 'antd';
import { Box, Stack, Skeleton } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Thumbs } from 'swiper/modules';

const DisplayImage = ({ images }) => {
    const [isMounted, setIsMounted] = useState(false);
    const [selectedImage, setSelectedImage] = useState(images[0]?.id);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) {
        return (
            <Fragment>
                <Box>
                    <img src={images[0]?.url || '/images/no_data.webp'} width="100%" />
                </Box>
                <Stack sx={{ mt: 1 }} direction="row" spacing={2}>
                    {
                        images.slice(0, 4).map((i, idx) => (
                            <Skeleton animation="wave" key={`skeleton-${idx}`} variant='rounded' width={90} height={90} />
                        ))
                    }
                </Stack>
            </Fragment>
        )
    }
    return (
        <Fragment>
            <Box>
                <Image
                    src={images.filter(io => io.id === selectedImage)[0]?.url || '/images/no_data.webp'}
                />
            </Box>
            <Stack sx={{ mt: 1 }} direction="row" spacing={1} alignItems="center" justifyContent="center" className='image-slider'>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={8}
                    freeMode={true}
                    pagination={{
                        clickable: false,

                    }}
                    modules={[FreeMode, Thumbs]}
                    className="mySwiper"
                >
                    {
                        images.map((i, idx) => (
                            <SwiperSlide key={idx}>
                                <Box onClick={() => setSelectedImage(i.id)} className={selectedImage === i.id ? "slide-img-container active" : "slide-img-container"}>
                                    <img width="100px" src={i.url} className='w-full' />
                                </Box>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Stack>
        </Fragment>
    )
}

export default DisplayImage;