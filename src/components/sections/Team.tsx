'use client'
import { Flex, VStack, Heading, Text, Image, keyframes, Box, Button } from '@chakra-ui/react';

const float_anim = keyframes`
    0% {transform: translateY(-20px);}
    50% {transform: translateY(0);}
    100% {transform: translateY(-20px);}
`;

const profiles = [
    {
        name: "Ing. Josué Carballo",
        profession: "Desarrollador",
        img: "profile1.jpg",
    },
    {
        name: "Lic. Bertha Andrianis",
        profession: "Diseñadora / Ilustradora",
        img: "profile2.jpg",
    },
    {
        name: "Ing. Lázaro Jesús",
        profession: "Desarrollador",
        img: "profile3.jpg",
    },
    {
        name: "Ing. Leonardo Fabián",
        profession: "Desarrollador",
        img: "profile4.jpg",
    },
    {
        name: "Ing. Claudia Rizo",
        profession: "Community Manager",
        img: "profile5.jpg",
    },
    {
        name: "Lic. Mary Isabel",
        profession: "Manager Creativity",
        img: "profile6.jpg",
    },
    {
        name: "Ing. Angel",
        profession: "Desarrollador",
        img: "profile7.jpg",
    },
]

const Step = () => {
    return (
        <Flex
            as='section'
            flexDirection={"column"}
            position={"relative"}
            px={{ base: "25px", md: "112px" }}
            py={{ base: "50px", md: "96px" }}
            alignItems={"center"}
            gap={"80px"}
        >
            <Box
                position="absolute"
                height={"auto"}
                top={{ base: "50px", md: "80px" }}
                right={{ base: "20px", md: "80px" }}
                animation={`${float_anim} infinite 10s linear`}
                zIndex={-1}
                transform={"rotate(180deg)"}
            >
                <Image
                    src='/points3.png'
                    alt=''
                />
            </Box>

            <VStack
                alignItems="center"
            >
                <Heading
                    as="h1"
                    fontSize={{ base: '25px', sm: "20px", md: '35px' }}
                    lineHeight={{ base: '1.33', md: '1.2' }}
                    fontWeight={"bold"}
                    color="gray.800"
                    textAlign={"center"}
                >
                    El equipo creativo detrás de la puerta
                </Heading>
            </VStack>
            <Flex
                flexFlow={"wrap"}
                justifyContent={"center"}
                gap={{ base: "20px", md: "50px" }}
            >
                {
                    profiles.map((profile) => (
                        <Flex
                            key={profile.name}
                            width={{ base: "45%", md: "200px" }}
                            flexDirection={"column"}
                            alignItems={"center"}
                            gap={"5px"}
                            textAlign={"center"}
                            transition={"all 0.5s"}
                            _hover={{
                                transform: "scale(1.1)"
                            }}
                        >
                            <Image
                                width={"100px"}
                                borderRadius={"50%"}
                                boxShadow={"0 20px 50px #5c5c5c3b"}
                                src={profile.img}
                                alt=''
                            />
                            <Heading
                                as="h2"
                                fontSize={"md"}
                                lineHeight={'1.2'}
                                fontWeight={"bold"}
                                fontFamily={"heading"}
                                width={"150px"}
                            >
                                {profile.name}
                            </Heading>
                            <Text fontSize={{ base: "13px", md: "16px" }}>
                                {profile.profession}
                            </Text>
                        </Flex>
                    ))
                }
            </Flex>
        </Flex>
    );
};

export default Step;