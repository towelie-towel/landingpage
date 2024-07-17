'use client'

import React, { useEffect } from 'react'
import { Box, IconButton, useBreakpointValue, Image, Flex, Text, Button } from '@chakra-ui/react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import Slider from 'react-slick'

const comments = [
    'Nox Creation cuenta con profesionales altamente calificados y competentes. Los distingue la calidad de sus desarrollos y el acompañamiento del cliente durante todo el ciclo de desarrollo del software. En Datalisoft, tuvimos la suerte de establecer alianzas con Nox Creation para de conjunto desarrollar la página web de la empresa. Verdaderamente estamos muy satisfechos con los resultados y por tanto los recomendamos para futuros desarrollos conjuntos.',
    'Encantada!!! con el resultado y muy agradecida. Un equipo excelente y muy profesional',
    'Estamos muy satisfechos con el trabajo realizado por el equipo de nox. Desde un inicio se evidencia un equipo muy profesional y comprometidos con lo que hacen.',
    'Gracias equipo, me ha gustado mucho el acabado, por fin puede tener mi página para mi negocio. Espero me sigan dando soporte con la misma puntualidad y profesionalidad que han tenido hasta ahora.',
]

export default function Carousel() {
    const [slider, setSlider] = React.useState<Slider | null>(null)

    const settings = {
        dots: false,
        arrows: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    }

    return (
        <Flex position={'relative'} width={'100%'} overflow={'hidden'}>
            <Flex alignItems={"center"}>
                <Button
                    aria-label="left-arrow"
                    onClick={() => slider?.slickPrev()}
                    w={"45px"} h={"45px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    color={"gray.800"}
                    border={"1px solid #D1D5DB"}
                    px={4}
                    borderRadius={"full"}
                >
                    <Image src="/preview.svg" />
                </Button>
            </Flex>
            {/* Slider */}
            <Box w={"100%"} overflow={"hidden"}>
                <Slider {...settings} ref={(slider) => setSlider(slider)}>
                    {comments.map((comment, index) => (
                        <Flex>
                            <Box w={"100%"}>
                                <Flex
                                    key={index}
                                    flexDir={"column"}
                                    gap={5}
                                    alignItems={"center"}
                                >
                                    <Image src="/quote.svg" w={"30px"} />
                                    <Flex flex={1} justifyContent={"center"} alignItems={"center"}>
                                        <Text
                                            fontSize={{ base: "13px", md: "16px" }}
                                            w={{ base: "100%", md: "50%" }}
                                            textAlign={"center"}
                                            fontWeight={500}
                                        >{comment}</Text>
                                    </Flex>
                                </Flex>
                            </Box>
                        </Flex>
                    ))}
                </Slider>
            </Box>
            <Flex alignItems={"center"}>
                <Button
                    aria-label="right-arrow"
                    onClick={() => slider?.slickNext()}
                    w={"45px"} h={"45px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    color={"gray.800"}
                    border={"1px solid #D1D5DB"}
                    px={4}
                    borderRadius={"full"}
                >
                    <Image src="/_next.svg" />
                </Button>
            </Flex>
        </Flex>
    )
}