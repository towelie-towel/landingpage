'use client'
import { Flex, VStack, Heading, Text, Image, Button, Link } from '@chakra-ui/react';
import { useState } from 'react';

const works = [
    {
        id: "1",
        category: "Desarrollos Web",
        title: "Datalisoft",
        img: "w1.webp",
        bg: undefined,
    },
    {
        id: "2",
        category: "Desarrollos Web",
        title: "Vigía Landing",
        img: "w2.webp",
        bg: undefined,
    },
    {
        id: "3",
        category: "Desarrollos Web",
        title: "Vigía System",
        img: "w3.webp",
        bg: undefined,
    },
    {
        id: "4",
        category: "Desarrollos Web",
        title: "GoTravelClub",
        img: "w4.webp",
        bg: undefined,
    },
    {
        id: "5",
        category: "Desarrollos Web",
        title: "SCAPA",
        img: "w5.webp",
        bg: undefined,
    },
    {
        id: "6",
        category: "Desarrollos Web",
        title: "Priscila",
        img: "w6.webp",
        bg: undefined,
    },
    {
        id: "7",
        category: "Desarrollos Web",
        title: "BALCOM PLUS",
        img: "w7.webp",
        bg: undefined,
    },
    {
        id: "8",
        category: "Desarrollos Web",
        title: "P2Panda",
        img: "w8.webp",
        bg: undefined,
    },
    {
        id: "9",
        category: "Dessarrollos Mobiles",
        title: "TCargo",
        img: "m1.webp",
        bg: undefined,
    },
    {
        id: "10",
        category: "Dessarrollos Mobiles",
        title: "Encargos",
        img: "m2.webp",
        bg: undefined,
    },
    {
        id: "11",
        category: "Dessarrollos Mobiles",
        title: "RemesasP2P",
        img: "m3.webp",
        bg: undefined,
    },
    {
        id: "12",
        category: "Dessarrollos Mobiles",
        title: "Gotravelclub",
        img: "m4.webp",
        bg: undefined,
    },
    {
        id: "13",
        category: "Dessarrollos Mobiles",
        title: "Priscila",
        img: "m5.webp",
        bg: undefined,
    },
    {
        id: "14",
        category: "Diseños",
        title: "Figma - Maubius",
        img: "d1.webp",
        bg: undefined,
    },
    {
        id: "15",
        category: "Diseños",
        title: "Figma - Landing NOX",
        img: "d2.webp",
        bg: "rgb(10, 192, 94)",
    },
    {
        id: "16",
        category: "Diseños",
        title: "Don Carlos - Etiqueta Vino",
        img: "d3.webp",
        bg: "rgb(166, 166, 166)",
    },
    {
        id: "17",
        category: "Diseños",
        title: "Logo - Cafetería La Esperanza",
        img: "d4.webp",
        bg: "rgb(166, 166, 166)",
    },
    {
        id: "18",
        category: "Diseños",
        title: "Logo - Ranchón El campecino",
        img: "d5.webp",
        bg: "rgb(166, 166, 166)",
    },
    {
        id: "19",
        category: "Diseños",
        title: "Figma - Landing Vígia",
        img: "w2.webp",
        bg: "rgb(166, 166, 166)",
    },
    {
        id: "20",
        category: "Diseños",
        title: "Figma - Landing Datalisoft",
        img: "w1.webp",
        bg: "rgb(166, 166, 166)",
    },
    {
        id: "21",
        category: "Ilustraciones",
        title: "",
        img: "i1.webp",
        bg: "rgb(171, 255, 240)",
    },
    {
        id: "22",
        category: "Ilustraciones",
        title: "",
        img: "i2.webp",
        bg: "rgb(171, 255, 240)",
    },
    {
        id: "23",
        category: "Ilustraciones",
        title: "",
        img: "i3.webp",
        bg: "rgb(255, 222, 243)",
    },
    {
        id: "24",
        category: "Ilustraciones",
        title: "",
        img: "i4.webp",
        bg: "rgb(208, 245, 200)",
    },
    {
        id: "25",
        category: "Ilustraciones",
        title: "",
        img: "i5.webp",
        bg: "rgb(190, 248, 165)",
    },
    {
        id: "26",
        category: "Ilustraciones",
        title: "",
        img: "i6.webp",
        bg: "rgb(242, 113, 117)",
    },
    {
        id: "27",
        category: "Ilustraciones",
        title: "",
        img: "i7.webp",
        bg: "rgb(252, 193, 149)",
    },
    {
        id: "28",
        category: "Ilustraciones",
        title: "",
        img: "i8.webp",
        bg: "rgb(178, 241, 255)",
    },

    {
        id: "29",
        category: "Trabajos en PVC",
        title: "",
        img: "pvc1.webp",
        bg: "rgb(223, 98, 98)",
    },
    {
        id: "30",
        category: "Trabajos en PVC",
        title: "",
        img: "pvc2.webp",
        bg: "rgb(239, 106, 162)",
    },
    {
        id: "31",
        category: "Trabajos en PVC",
        title: "",
        img: "pvc3.webp",
        bg: "rgb(215, 131, 105)",
    },
    {
        id: "32",
        category: "Trabajos en PVC",
        title: "",
        img: "pvc4.webp",
        bg: "rgb(215, 177, 105)",
    },
    {
        id: "33",
        category: "Trabajos en PVC",
        title: "",
        img: "pvc5.webp",
        bg: "rgb(215, 118, 105)",
    },
    {
        id: "34",
        category: "Trabajos en PVC",
        title: "",
        img: "pvc6.webp",
        bg: "rgb(26, 56, 130)",
    },
    {
        id: "35",
        category: "Trabajos en PVC",
        title: "",
        img: "pvc7.webp",
        bg: "rgb(65, 100, 189)",
    },
    {
        id: "36",
        category: "Trabajos en PVC",
        title: "",
        img: "pvc8.webp",
        bg: "rgb(55, 64, 85)",
    },
]

const Works = () => {
    const [selectedCategory, setSelectedCategory] = useState(works.find(work => work.category)?.category);

    return (
        <Flex
            as='section'
            flexDirection={"column"}
            gap={"50px"}
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
                    fontWeight={"bold"}
                    fontFamily={"heading"}
                >
                    Selección de trabajos
                </Heading>
                <Text fontSize={{ base: "13px", md: "16px" }}>
                    Esta es una muestra de trabajos que hemos realizados
                </Text>
            </VStack>
            <Flex
                flexDirection={"column"}
                gap={"50px"}
            >
                <Flex
                    gap={5}
                    justifyContent={"center"}
                    flexFlow={"wrap"}
                >
                    {
                        works.reduce((acc, obj) => {
                            // @ts-ignore
                            if (obj.category && !acc.includes(obj.category)) acc.push(obj.category);
                            return acc;
                        }, []).map((category) => (
                            <Button
                                key={category}
                                onClick={() => {
                                    setSelectedCategory(category);
                                }}
                                bg={selectedCategory === category ? 'green.200' : "transparent"}
                                color={selectedCategory === category ? 'white' : undefined}
                                fontSize={'14px'}
                                fontWeight={600}
                                borderRadius={50}
                                height={10}
                                minWidth={10}
                                px={4}
                                transition={"all 0.5s"}
                                _hover={selectedCategory === category ? {
                                    bg: 'green.200',
                                    filter: "brightness(0.9)",
                                    boxShadow: "0 20px 50px #5c5c5c3b",
                                    transition: "All 0.5s"
                                } : {}}
                                _active={{
                                    transform: "scale(0.97)",
                                    background: "gray.200"
                                }}
                            >
                                {category}
                            </Button>
                        ))
                    }
                </Flex>
                <Flex
                    flexFlow={"wrap"}
                    justifyContent={"center"}
                    gap={{ base: "20px", md: "64px" }}
                >
                    {
                        works.filter(work => work.category === selectedCategory).map((work, i) => (
                            <Flex
                                key={i}
                                flexDirection={"column"}
                            >
                                <Flex
                                    bg={work.bg ? work.bg : "#4f4f4f"}
                                    width={{ base: "150px", md: "230px" }}
                                    height={{ base: "100px", md: "230px" }}
                                    flexDirection={"column"}
                                    alignItems={"center"}
                                    justifyContent={"center"}
                                    textAlign={"center"}
                                    borderRadius={"8px"}
                                    boxShadow={"0 20px 50px #5c5c5c3b"}
                                    overflow={"hidden"}
                                    position={"relative"}
                                    cursor={"pointer"}
                                    transition={"all 0.5s"}
                                    _hover={{
                                        transform: "scale(1.1)",
                                        transition: "all 0.5s"
                                    }}
                                >
                                    <Image
                                        height={"149px"}
                                        src={work.img}
                                        alt=''
                                    />
                                    <Heading
                                        as="h6"
                                        display={{ base: "none", md: "initial" }}
                                        fontSize={{ base: 'sm', md: 'xl' }}
                                        lineHeight={{ md: '1.2' }}
                                        fontWeight={"bold"}
                                        fontFamily={"heading"}
                                        mt={4}
                                        color={"white"}
                                    >
                                        {work.title}
                                    </Heading>
                                </Flex>
                                <Heading
                                    as="h2"
                                    display={{ base: "initial", md: "none" }}
                                    fontSize={{ base: 'sm', md: 'xl' }}
                                    lineHeight={{ md: '1.2' }}
                                    fontWeight={"bold"}
                                    color={"#3d3d3d"}
                                    fontFamily={"heading"}
                                    mt={2}
                                    textAlign={"center"}
                                >
                                    {work.title}
                                </Heading>
                            </Flex>
                        ))
                    }
                </Flex>
            </Flex>
            <Button
                alignSelf={"center"}
                as={'a'}
                href={'https://wa.me/+5358477311?text=Hola que tal, me interesa colaborar con ustedes'}
                minWidth={10}
                width={"250px"}
                height={10}
                display={"inline-flex"}
                alignItems={"center"}
                justifyContent={"center"}
                fontSize={'14px'}
                lineHeight={"1.2"}
                fontWeight={600}
                transition={"all 0.5s"}
                color={'white'}
                bg={'green.200'}
                borderRadius={50}
                px={4}
                boxShadow={"0 20px 50px #5c5c5c3b"}
                _hover={{
                    bg: 'green.200',
                    filter: "brightness(0.9)",
                    boxShadow: "0 20px 20px #5c5c5c3b",
                    transition: "All 0.5s"
                }}
            >
                Me interesa colaborar
            </Button>
        </Flex>
    );
};

export default Works;