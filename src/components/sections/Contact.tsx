'use client'
import { Flex, Heading, Input, Textarea, Text, Button, Link, Image } from '@chakra-ui/react';

const Contact = () => {

    return (
        <Flex
            id="contact"
            as='section'
            flexDirection={{ base: "column", md: "row" }}
            width={"100%"}
        >
            <iframe style={{ flex: 1 }} loading='lazy' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1091.1460806470911!2d-82.38725352754689!3d23.091116820951388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2scu!4v1711133515224!5m2!1ses!2scu" ></iframe>
            <Flex
                flex={2}
                flexDirection={"column"}
                pl={"40px"}
                p={"30px"}
                position={"relative"}
                alignItems={"center"}
                gap={"50px"}
            >
                <Flex
                    width={"100%"}
                    gap={2}
                    flexDir={"column"}
                >
                    <Heading
                        as="h1"
                        fontSize={{ base: '25px', sm: "20px", md: '35px' }}
                        lineHeight={{ base: '1.33', md: '1.2' }}
                        fontWeight={"bold"}
                        fontFamily={"heading"}
                    >
                        Contacto
                    </Heading>
                    <Text fontSize={{ base: "13px", md: "16px" }}>
                        Escriba los siguientes datos con la información que nos quiera hacer llegar.
                    </Text>
                </Flex>
                <Flex
                    width={"100%"}
                    gap={5}
                    flexDir={"column"}
                >
                    <Flex
                        width={"100%"}
                        flexDir={"row"}
                        gap={5}
                    >
                        <Input placeholder='Nombre' />
                        <Input placeholder='Apellidos' />
                    </Flex>
                    <Input placeholder='Correo' />
                    <Input placeholder='Teléfono' />
                    <Textarea placeholder='Escriba en un breve texto' />

                    <Flex w={"100%"} flexDirection={"row-reverse"} >
                        <Button
                            as={'a'}
                            href={'https://g.page/r/CYAbtbAhpD-hEAI/review'}
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
                            Enviar Formulario
                        </Button>
                    </Flex>
                    <Flex
                        gap={{ base: 5, md: 2 }}
                        flexDirection={{ base: "column", md: "row" }}
                        my={"20px"}
                    >
                        <Link display={"flex"} flex={1} href='https://www.google.com/maps?ll=23.091117,-82.387254&z=18&t=m&hl=es&gl=CU&mapclient=embed'>
                            <Flex
                                justifyContent={{ base: "left", md: "center" }}
                                flex={1}
                                alignItems={"center"}
                            >
                                <Flex>
                                    <Image src='/icon_gps.svg' />
                                </Flex>
                                <Flex flexDir={"column"}>
                                    <Text fontSize={"14px"} color={"green.200"} fontWeight={600}>
                                        Estamos en
                                    </Text>
                                    <Text fontSize={"12px"}>
                                        Calle O e/ Lindero y Ocujes Casino Deportivo.
                                    </Text>
                                </Flex>
                            </Flex>
                        </Link>

                        <Link display={"flex"} flex={1} href='tel:+5358477311'>
                            <Flex
                                justifyContent={{ base: "left", md: "center" }}
                                flex={1}
                                alignItems={"center"}
                            >
                                <Flex>
                                    <Image src='/icon_phone.svg' />
                                </Flex>
                                <Flex flexDir={"column"}>
                                    <Text fontSize={"14px"} color={"green.200"} fontWeight={600}>
                                        Llamenos A
                                    </Text>
                                    <Text fontSize={"12px"}>
                                        +53 5847 73 11
                                    </Text>
                                </Flex>
                            </Flex>
                        </Link>

                        <Link display={"flex"} flex={1} href='mailto:service@noxcreation.dev'>
                            <Flex
                                justifyContent={{ base: "left", md: "center" }}
                                flex={1}
                                alignItems={"center"}
                            >
                                <Flex>
                                    <Image src='/icon_mail.svg' />
                                </Flex>
                                <Flex flexDir={"column"}>
                                    <Text fontSize={"14px"} color={"green.200"} fontWeight={600}>
                                        Escribanos A
                                    </Text>
                                    <Text fontSize={"12px"}>
                                        service@noxcreation.dev
                                    </Text>
                                </Flex>
                            </Flex>
                        </Link>
                    </Flex>

                </Flex>
            </Flex>
        </Flex>
    );
};

export default Contact;