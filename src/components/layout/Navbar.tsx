'use client'
import { Box, Flex, Button, useDisclosure, Stack, useBreakpointValue, Image, Link, DrawerContent, Drawer, DrawerOverlay, DrawerBody, DrawerCloseButton } from '@chakra-ui/react'

export default function Navbar() {
    const { isOpen, onToggle, onClose } = useDisclosure()

    return (
        <nav>
            <Flex
                className='navbar-container'
                bg={'white'}
                color={"gray.600"}
                minH={'60px'}
                align={'center'}
                padding={"25px"}
                px={{ md: "64px", xl: "114px" }}
            >

                <Flex flex={{ base: 1 }} justify={{ base: 'start' }}>
                    <Link width={85} textAlign={useBreakpointValue({ base: 'center', lg: 'left' })} fontFamily={'heading'} color={'gray.800'} href='/' >
                        <Image src="/logotipo_nox.svg" alt="Next.js Logo" width={85} />
                    </Link>

                    <Flex display={useBreakpointValue({ base: 'none', md: 'flex' })} flex={1} justifyContent={"center"}>
                        <Box display={{ base: "flex" }} flexDirection={"row"} alignItems={"center"}>
                            <Button as={'a'} fontSize={"14px"} color={"gray.800"} variant={'ghost'} href={'#'}>
                                Servicios
                            </Button>
                            <Button as={'a'} fontSize={"14px"} color={"gray.800"} variant={'ghost'} href={'#'}>
                                Pasos
                            </Button>
                            <Button as={'a'} fontSize={"14px"} color={"gray.800"} variant={'ghost'} href={'#'}>
                                Nuestro Equipo
                            </Button>
                            <Button as={'a'} fontSize={"14px"} color={"gray.800"} variant={'ghost'} href={'#'}>
                                Trabajos
                            </Button>
                            <Button as={'a'} fontSize={"14px"} color={"gray.800"} variant={'ghost'} href={'#'}>
                                Comentarios
                            </Button>
                            <Button as={'a'} fontSize={"14px"} color={"gray.800"} variant={'ghost'} href={'#'}>
                                Contacto
                            </Button>
                            <Button as={'a'} fontSize={"14px"} color={"gray.800"} variant={'ghost'} href={'#'}>
                                Blog
                            </Button>
                        </Box>
                    </Flex>
                </Flex>
                <Flex
                    flex={'auto'}
                    justifyContent={"flex-end"}
                    display={useBreakpointValue({ md: 'none' })}
                >
                    <Button
                        onClick={onToggle}
                        p={0}
                        borderRadius={50}
                        width={10}
                        height={10}
                        _hover={{}}
                        _active={{
                            transform: "scale(0.97)",
                            bg: "gray.200"
                        }}
                    >
                        <Image src="/menu.svg" alt="Next.js Logo" />
                    </Button>
                </Flex>

                <Stack
                    display={useBreakpointValue({ base: 'none', xl: 'flex' })}
                    flex={useBreakpointValue({ base: 1, md: 0 })}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}
                >
                    <Button as={'a'} fontSize={"14px"} color={"gray.800"} variant={'ghost'} href={'#'}>
                        Conocer Más
                    </Button>

                    <Button
                        as={'a'}
                        href={'#'}
                        width={"150px"}
                        display={useBreakpointValue({ base: 'none', xl: 'inline-flex' })}
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
                </Stack>
            </Flex>

            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="xs"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody display={"flex"} flex={1} justifyContent={"center"} alignItems={"center"}>
                        <Flex display={useBreakpointValue({ lg: 'none' })} flex={1} justifyContent={"center"} alignItems={"center"}>
                            <Box display={{ base: "flex" }} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                                <Button as={'a'} fontSize={"14px"} color={"gray.800"} variant={'ghost'} href={'#'}>
                                    Servicios
                                </Button>
                                <Button as={'a'} fontSize={"14px"} color={"gray.800"} variant={'ghost'} href={'#'}>
                                    Pasos
                                </Button>
                                <Button as={'a'} fontSize={"14px"} color={"gray.800"} variant={'ghost'} href={'#'}>
                                    Nuestro Equipo
                                </Button>
                                <Button as={'a'} fontSize={"14px"} color={"gray.800"} variant={'ghost'} href={'#'}>
                                    Trabajos
                                </Button>
                                <Button as={'a'} fontSize={"14px"} color={"gray.800"} variant={'ghost'} href={'#'}>
                                    Comentarios
                                </Button>
                                <Button as={'a'} fontSize={"14px"} color={"gray.800"} variant={'ghost'} href={'#'}>
                                    Contacto
                                </Button>
                                <Button as={'a'} fontSize={"14px"} color={"gray.800"} variant={'ghost'} href={'#'}>
                                    Blog
                                </Button>
                            </Box>
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </nav>
    )
}