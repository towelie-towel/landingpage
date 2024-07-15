'use client'
import { Box, Container, Flex, VStack, Heading, Text, Button, Image, keyframes } from '@chakra-ui/react';

const float_anim_1 = keyframes`
    0% {transform: translateY(-20px);}
    50% {transform: translateY(0);}
    100% {transform: translateY(-20px);}
`;
const float_anim_2 = keyframes`
    0% {transform: translateY(0);}
    50% {transform: translateY(-20px);}
    100% {transform: translateY(0);}
`;

const Welcome = () => {
    return (
        <Box as='section' width={"100%"} height={"90vh"} position="relative">
            <Flex position={"relative"} justifyContent={"center"}
                mt={{ base: "75px", xl: "90px" }}>
                <Box
                    minWidth={"320px"}
                    height='173px'
                    width='499px'
                    animation={`${float_anim_1} infinite 10s linear`}
                >
                    <Image
                        src='/ornament1.png'
                        alt=''
                    />
                </Box>
                <Box
                    position="absolute"
                    height={"auto"}
                    top={0}
                    left={{ base: "20px", xl: "80px" }}
                    animation={`${float_anim_2} infinite 10s linear`}
                >
                    <Image
                        src='/points1.png'
                        alt=''
                    />
                </Box>
                <Box
                    position="absolute"
                    height={"auto"}
                    top={0}
                    right={{ base: "20px", xl: "80px" }}
                    animation={`${float_anim_2} infinite 10s linear`}
                >
                    <Image
                        src='/points2.png'
                        alt=''
                    />
                </Box>
            </Flex>
            <Container centerContent maxW="container.xl" px={{ base: "25px", xl: "0px" }}>
                <Flex direction={{ base: 'column', lg: 'row' }} width={{ base: "100%", md: "60vh" }} textAlign="center">
                    <VStack
                        align="center"
                        gap={5}
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
                            ¿Quieres automatizar tu negocio y no sabes a quién acudir?
                        </Heading>
                        <Text fontSize="16px" lineHeight="26px" fontWeight={500} color="gray.600">
                            Somos la solución a tus necesidades. Tenemos las habilidades, el compromiso y la creatividad para llevar tus idea y tu negocio a otro nivel ofertándote la posibilidad de crear un sistema que se adapte a tus necesidades. Con Nox no existen barreras contáctenos para poderle ayudar.
                        </Text>
                        <Flex
                            direction={"row"}
                            align="center"
                            gap={"20px"}
                        >
                            <Button
                                as={'a'}
                                href={'#'}
                                width={"150px"}
                                fontSize={'14px'}
                                fontWeight={600}
                                color={'white'}
                                bg={'green.200'}
                                borderRadius={50}
                                _hover={{
                                    bg: 'green.200',
                                    filter: "brightness(0.9)",
                                    boxShadow: "0 20px 20px #5c5c5c3b",
                                    transition: "All 0.5s"
                                }}>
                                Contactar
                            </Button>
                            <Button
                                as={'a'}
                                fontSize={"14px"}
                                width={"150px"}
                                color={"gray.800"}
                                borderRadius={50}
                                variant={'outline'}
                                href={'#'}
                                _hover={{
                                    filter: "brightness(0.9)",
                                    boxShadow: "0 20px 20px #5c5c5c3b",
                                    transition: "All 0.5s"
                                }}
                            >
                                Conocer Más
                            </Button>
                        </Flex>
                    </VStack>
                </Flex>
            </Container>

            <Flex
                position={"relative"}
                justifyContent={"center"}
                mt={{ base: "65px", xl: "80px" }}
                height={"100px"}
            >
                <Box
                    position="absolute"
                    height={"auto"}
                    top={{ base: "-10px", sm: "-15px", md: "-40px", xl: "-100px", '2xl': "-120px" }}
                    left={{ base: "5px", sm: "15px", md: "40px", xl: "60px" }}
                    animation={`${float_anim_1} infinite 10s linear`}
                >
                    <Image
                        src='/ornament2.png'
                        alt=''
                    />
                </Box>
                <Box
                    position="absolute"
                    height={"auto"}
                    top={{ base: "10px", sm: "-25px", md: "-140px", xl: "-180px", '2xl': "-200px" }}
                    right={{ base: "5px", sm: "15px", md: "40px", xl: "60px" }}
                    animation={`${float_anim_2} infinite 10s linear`}
                >
                    <Image
                        src='/ornament3.png'
                        alt=''
                    />
                </Box>
            </Flex>
        </Box>
    );
};

export default Welcome;