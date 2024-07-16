'use client'
import { Flex, VStack, Heading, Text, Image } from '@chakra-ui/react';

const services = [
    {
        title: "Gestión",
        description: "Desarrollo de software de gestión de la información de tu negocio",
        img: "box1.svg",
    },
    {
        title: "Landing Page",
        description: "Desarrollo de tu página principal de tu negocio de cara a internet",
        img: "box2.svg",
    },
    {
        title: "Móviles",
        description: "Desarrollo de aplicaciones móviles Android & IOs modernas y rápidas",
        img: "box3.svg",
    },
    {
        title: "Descentralización",
        description: "Desarrollamos aplicaciones descentralizadas de cara a la Blockchain con web3",
        img: "box4.svg",
    },
    {
        title: "Ilustración",
        description: "Ilustramos todas tus ideas, realizamos carteles, personajes 2D y mucho más",
        img: "box5.svg",
    },
    {
        title: "Carteles",
        description: "Desarrollamos todo tipo de carteles en PVC como tablas de menú entre otros",
        img: "box6.svg",
    },
]

const Service = () => {
    return (
        <Flex
            as='section'
            flexDirection={"column"}
            mt={{ base: "200px", md: "0px" }}
            gap={"60px"}
            px={{ base: "25px", md: "112px" }}
            py={{ base: "50px", md: "96px" }}
        >
            <VStack
                align="center"
                gap={2}
                flex={1}
                width={{}}
            >
                <Heading
                    as="h1"
                    fontSize={{ base: '25px', sm: "20px", md: '35px' }}
                    lineHeight={{ base: '1.33', md: '1.2' }}
                    fontWeight={600}
                    color="gray.800"
                >
                    Servicios a la medida
                </Heading>
                <Text fontSize="16px" lineHeight="26px" fontWeight={500} color="gray.600">
                    Te adelantamos algunos de nuestros servicios que podemos ofrecerte
                </Text>
            </VStack>
            <Flex
                flexFlow={"wrap"}
                justifyContent={"center"}
                gap={{ base: "20px", md: "64px" }}
            >
                {
                    services.map((service) => (
                        <Flex
                            key={service.title}
                            width={{ base: "45%", md: "28%" }}
                            flexDirection={"column"}
                            alignItems={"center"}
                            gap={"5px"}
                            textAlign={"center"}
                        >
                            <Image
                                src={service.img}
                                alt=''
                            />
                            <Heading
                                as="h1"
                                fontSize={"xl"}
                                lineHeight={'1.2'}
                                fontWeight={600}
                                color="border"
                            >
                                {service.title}
                            </Heading>
                            <Text fontSize="16px" lineHeight="26px" fontWeight={500} color="gray.600">
                                {service.description}
                            </Text>
                        </Flex>
                    ))
                }
            </Flex>
        </Flex>
    );
};

export default Service;