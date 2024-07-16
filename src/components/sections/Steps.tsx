'use client'
import { Flex, VStack, Heading, Text, Image, keyframes, Box, Button } from '@chakra-ui/react';

const float_anim = keyframes`
    0% {transform: translateY(-20px);}
    50% {transform: translateY(0);}
    100% {transform: translateY(-20px);}
`;

const steps = [
    {
        title: "Contáctenos",
        description: "Lo primero que necesita hacer es contactarnos para poder planificar una reunión y poder conocer sus proyecciones y la magnitud de sus necesidades",
        img: {
            src: "step1.png",
            side: "left"
        },
        btn: {
            text: "Contact",
            href: "https://wa.me/+5358477311?text=Hola que tal, estoy interesado en sus trabajos."
        }
    },
    {
        title: "Obtener Propuesta",
        description: "Teniendo una idea de su proyecto, procedemos a crearle una propuesta que incluyen requisitos que debe cumplir el sistema y una estimación de tiempo y costo",
        img: {
            src: "step2.png",
            side: "right"
        },
        btn: {
            text: "Learn More",
            href: "https://wa.me/+5358477311?text=Hola que tal, me gustaría conocer más sobre NOX."
        }
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
        >
            <Box
                position="absolute"
                height={"auto"}
                top={{ base: "50px", md: "80px" }}
                left={{ base: "20px", md: "80px" }}
                animation={`${float_anim} infinite 10s linear`}
            >
                <Image
                    src='/points3.png'
                    alt=''
                />
            </Box>

            <VStack
                alignItems="center"
                gap={2}
                mb={10}
            >
                <Heading
                    as="h1"
                    fontSize={{ base: '25px', sm: "20px", md: '35px' }}
                    lineHeight={{ base: '1.33', md: '1.2' }}
                    fontWeight={"bold"}
                    color="gray.800"
                >
                    ¿Cómo trabajamos?
                </Heading>
                <Text width={{ base: "100%", md: "50vw" }} textAlign={"center"} fontSize={{ sm: "13px", md: "16px" }}>
                    Le ayudamos a desarrollar cualquier tipo de solución. Debe seguir los siguientes pasos para podernos comunicar y conocer sus necesidades.
                </Text>
            </VStack>
            <Flex
                flexDirection={"column"}
                justifyContent={"center"}
            >
                {
                    steps.map((step) => (
                        <Flex
                            key={step.title}
                            flexDirection={step.img.side === "left" ? "row" : "row-reverse"}
                        >
                            <Flex flex={1} alignItems={"center"}>
                                <Image
                                    src={step.img.src}
                                    alt=''
                                />
                            </Flex>
                            <Flex
                                flex={1}
                                flexDirection={"column"}
                                alignItems={"center"}
                                justifyContent={"center"}
                            >
                                <Flex flexDirection={"column"} gap={5}>
                                    <Heading
                                        as="h1"
                                        fontSize={{ base: '2xl', md: '3xl' }}
                                        lineHeight={{ base: '1.33', md: '1.2' }}
                                        fontWeight={500}
                                    >
                                        {step.title}
                                    </Heading>
                                    <Text
                                        fontSize={{ base: "13px", md: "16px" }}
                                        width={{ base: "100%", md: "40vw" }}
                                    >
                                        {step.description}
                                    </Text>
                                    <Button
                                        as={'a'}
                                        href={step.btn.href}
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
                                        {step.btn.text}
                                    </Button>
                                </Flex>
                            </Flex>
                        </Flex>
                    ))
                }
            </Flex>
        </Flex>
    );
};

export default Step;