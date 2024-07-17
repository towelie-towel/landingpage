'use client'
import React, { useRef, useState } from 'react'
import { Box, Flex, Button, Heading, Text } from '@chakra-ui/react'
import Slider from 'react-slick'

const videos = [
    {
        url: "https://www.youtube.com/embed/SxxuH2UrF40?si=2CG7oC43MGhQScFv",
        title: "Diseño + Maquetación de un Blog",
        description: "En este video explicamos el proceso de diseño y maquetación de un blog personal. Este proceso es el seguido por nuestro equipo para el desarrollo de diferentes soluciones.",
        type: "Blog"
    },
    {
        url: "https://www.youtube.com/embed/pd6eugDH3xk?si=8L9klw7DMBxAF-p5",
        title: "Centro de Mediación Vígia Norte 3",
        description: "El proyecto inicial consistió en la creación de una landing page diseñada específicamente para el Centro de Mediación Vigía Norte 3, la cual fue implementada con éxito. Tras la finalización de este sitio web, se procedió a desarrollar un sistema de automatización avanzado, cuyo propósito es la generación y emisión de actas con firma digital. Este sistema ha optimizado significativamente el proceso, asegurando una mayor eficiencia y seguridad en la gestión de documentos.",
        type: "Landing Page"
    },
    {
        url: "https://www.youtube.com/embed/9RrX8fqqTqc?si=tWcaRSDyylXmwtpq",
        title: "Panel Vígia System",
        description: "Nuestro cliente, Centro de Mediación Vigía Norte 3, tenía la problemática de gestionar las actas de mediaciones debido al engorroso proceso de hacer corresponder los datos, los agendamientos y emisiones de las actas firmadas por cada caso. Es por ello que nuestro equipo se ha dado a la tarea de automatizar este proceso simplificando un 80% el trabajo que hoy realizan manualmente la entidad.",
        type: "Aplicación Web"
    },
    {
        url: "https://www.youtube.com/embed/o9EuVTQYtU8?si=CR3ftWI_4yM06WvO",
        title: "Datalisoft",
        description: "Trabajo realizado en colaboración con nuestros colegas de Datalisoft. Trabajo de Diseño + Maquetación",
        type: "Landing Page"
    },
    {
        url: "https://www.youtube.com/embed/zX_gL1tgm_c?si=S4UyIGNOvCBbjyoN",
        title: "P2PANDA",
        description: "P2Panda es una exchange que facilita el intercambio de criptomonedas de personas a personas (P2P). Posee soporte para variarias redes. Este sistema está a la venta. Si está interesado en comprar el producto solamente contáctenos.",
        type: "Exchange"
    },
]

export default function YoutubeCarousel() {
    const [slideIndex, setSlideIndex] = useState(0);
    const [slider, setSlider] = React.useState<Slider | null>(null)
    const settings = {
        speed: 500,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (_: any, next: number) => setSlideIndex(next)
    }

    return (
        <Box position={'relative'} width={'100%'} overflow={'hidden'} py={{ base: "0px", sm: 5 }}>
            <Slider
                {...settings}
                ref={(slider) => setSlider(slider)}
            >
                {videos.map((videos, index) => (
                    <Flex key={index}>
                        <Flex
                            flex={'0 0 100%'}
                            position="relative"
                            flexDirection={{ base: "column", md: "row" }}
                            gap={10}
                            justifyContent={"center"}
                        >
                            <Flex
                                borderRadius={"8px"}
                                overflow={"hidden"}
                                flexDirection={"column"}
                                alignItems={"flex-start"}
                                flex={1}
                            >
                                <iframe
                                    width="100%"
                                    height="500px"
                                    src={videos.url}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                />
                            </Flex>

                            <Flex
                                alignItems={"flex-start"}
                                justifyContent={"center"}
                                flexDirection={"column"}
                                gap={6}
                                flex={1}
                                p={5}
                            >
                                <Heading
                                    as="h2"
                                    fontSize={{ base: '3xl', md: '4xl' }}
                                    lineHeight={{ base: '1.33', md: '1.2' }}
                                    fontWeight={"bold"}
                                    fontFamily={"heading"}
                                >
                                    {videos.title}
                                </Heading>
                                <Text>
                                    {videos.description}
                                </Text>
                                <Box>
                                    <Heading
                                        as="h2"
                                        fontSize={"md"}
                                        lineHeight={'1.2'}
                                        fontWeight={"bold"}
                                        fontFamily={"heading"}
                                    >
                                        Tipo
                                    </Heading>
                                    <Text>
                                        {videos.type}
                                    </Text>
                                </Box>
                            </Flex>
                        </Flex>
                    </Flex>
                ))}
            </Slider>
            <Box
                width={"100%"}
                mx={"auto"}
                px={"4"}
                maxW={"xl"}
                py={10}
            >
                <Flex
                    justifyContent={"center"}
                    alignItems={"center"}
                    mt={5}
                >
                    {
                        videos.map((_, i) => (
                            <Button
                                onClick={() => {
                                    slider?.slickGoTo(i)
                                }}
                                display={"inline-flex"}
                                alignItems={"center"}
                                justifyContent={"center"}
                                borderRadius={"50px"}
                                transition={"all 0.5s ease 0"}
                                bg={slideIndex === i ? "green.200" : "gray.300"}
                                boxShadow={"rgba(92, 92, 92, 0.23) 0px 20px 50px"}
                                w={"8px"}
                                minWidth={"8px"}
                                h={"8px"}
                                mx={1}
                                p={0}
                                _hover={{
                                    filter: "brightness(0.9)",
                                    boxShadow: "rgba(92, 92, 92, 0.23) 0px 20px 20px",
                                    transition: "all 0.5s ease 0s"
                                }}
                                _active={{
                                    transform: "scale(0.97)"
                                }}
                            />
                        ))
                    }
                </Flex>
            </Box>
        </Box>
    )
}