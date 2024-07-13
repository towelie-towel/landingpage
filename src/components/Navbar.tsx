'use client'
import { Box, Flex, Button, useDisclosure, useColorModeValue, Stack, useColorMode, Collapse, IconButton, useBreakpointValue, Image, Link } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose, onToggle } = useDisclosure()

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')}>
                <Flex
                    bg={useColorModeValue('white', 'gray.800')}
                    color={useColorModeValue('gray.600', 'white')}
                    minH={'60px'}
                    px={{ base: "25px", lg: "112px" }}
                    py={{ base: "24px" }}
                    align={'center'}
                >

                    <Flex flex={{ base: 1 }} justify={{ base: 'start' }}>
                        <Link width={85} textAlign={useBreakpointValue({ base: 'center', md: 'left' })} fontFamily={'heading'} color={useColorModeValue('gray.800', 'white')} href='/' >
                            <Image src="/logotipo_nox.svg" alt="Next.js Logo" width={85} />
                        </Link>

                        <Flex display={{ base: 'none', md: 'flex' }} flex={1} justifyContent={"center"}>
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
                        flex={{ md: 'auto' }}
                        display={{ base: 'flex', md: 'none' }}
                    >
                        <Button onClick={onToggle}>
                            <Image src="/menu.svg" alt="Next.js Logo" />
                        </Button>
                    </Flex>

                    <Stack display={{ base: 'none', md: 'flex' }} flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
                        <Button as={'a'} fontSize={"14px"} color={"gray.800"} variant={'ghost'} href={'#'}>
                            Conocer Más
                        </Button>

                        <Button
                            as={'a'}
                            href={'#'}
                            width={"150px"}
                            display={{ base: 'none', md: 'inline-flex' }}
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

                <Collapse in={isOpen} animateOpacity>
                    {/* <MobileNav /> */}
                </Collapse>
            </Box>
        </>
    )
}