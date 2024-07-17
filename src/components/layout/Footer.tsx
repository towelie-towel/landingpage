'use client'

import {
    Box,
    chakra,
    Link,
    Image,
    Stack,
    Text,
    useBreakpointValue,
    VisuallyHidden,
    Grid,
    Button,
    GridItem,
    Flex,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import { ReactNode } from 'react'

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode
    label: string
    href: string
}) => {
    return (
        <chakra.button
            rounded={'full'}
            w={6}
            h={6}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

export default function SmallWithSocial() {
    return (
        <footer>
            <Box
                // bg={"gray.100"}
                color={"gray.700"}
                display={"flex"}
                flexDirection={"column"}
                gap={"20px"}
                padding={"25px"}
                paddingX={{ md: "114px" }}
            >
                <Box
                    display={"flex"}
                    flexDirection={{ base: 'column', md: "row" }}
                    justifyContent={{ base: 'space-between' }}
                    alignItems={{ base: 'center' }}
                >
                    <Box alignSelf={"self-start"} width={85}>
                        <Link width={85} textAlign={useBreakpointValue({ base: 'center', md: 'left' })} fontFamily={'heading'} color={'gray.800'} href='/' >
                            <Image src="/logotipo_nox.svg" alt="Next.js Logo" width={85} />
                        </Link>
                    </Box>

                    <Flex
                        flexWrap={"wrap"}
                        justify={"center"}
                        gap="12px"
                        flex={1}
                    >
                        <Button
                            as={NextLink}
                            scroll
                            borderRadius={"50px"}
                            transform={"all 0.5s"}
                            _active={{
                                transform: "scale(0.97)",
                                backgroundColor: "gray.200"
                            }}
                            fontSize={"14px"}
                            color={"gray.800"}
                            variant={'ghost'}
                            href={'/#service'}
                        >
                            Servicios
                        </Button>
                        <Button
                            as={NextLink}
                            scroll
                            borderRadius={"50px"}
                            transform={"all 0.5s"}
                            _active={{
                                transform: "scale(0.97)",
                                backgroundColor: "gray.200"
                            }}
                            fontSize={"14px"}
                            color={"gray.800"}
                            variant={'ghost'}
                            href={'/#steps'}
                        >
                            Pasos
                        </Button>
                        <Button
                            as={NextLink}
                            scroll
                            borderRadius={"50px"}
                            transform={"all 0.5s"}
                            _active={{
                                transform: "scale(0.97)",
                                backgroundColor: "gray.200"
                            }}
                            fontSize={"14px"}
                            color={"gray.800"}
                            variant={'ghost'}
                            href={'/#team'}
                        >
                            Nuestro Equipo
                        </Button>
                        <Button
                            as={NextLink}
                            scroll
                            borderRadius={"50px"}
                            transform={"all 0.5s"}
                            _active={{
                                transform: "scale(0.97)",
                                backgroundColor: "gray.200"
                            }}
                            fontSize={"14px"}
                            color={"gray.800"}
                            variant={'ghost'}
                            href={'/#works'}
                        >
                            Trabajos
                        </Button>
                        <Button
                            as={NextLink}
                            scroll
                            borderRadius={"50px"}
                            transform={"all 0.5s"}
                            _active={{
                                transform: "scale(0.97)",
                                backgroundColor: "gray.200"
                            }}
                            fontSize={"14px"}
                            color={"gray.800"}
                            variant={'ghost'}
                            href={'/#comments'}
                        >
                            Comentarios
                        </Button>
                        <Button
                            as={NextLink}
                            scroll
                            borderRadius={"50px"}
                            transform={"all 0.5s"}
                            _active={{
                                transform: "scale(0.97)",
                                backgroundColor: "gray.200"
                            }}
                            fontSize={"14px"}
                            color={"gray.800"}
                            variant={'ghost'}
                            href={'/#contact'}
                        >
                            Contacto
                        </Button>
                        <Button
                            as={NextLink}
                            scroll
                            borderRadius={"50px"}
                            transform={"all 0.5s"}
                            _active={{
                                transform: "scale(0.97)",
                                backgroundColor: "gray.200"
                            }}
                            fontSize={"14px"}
                            color={"gray.800"}
                            variant={'ghost'}
                            href={'/blog'}
                        >
                            Blog
                        </Button>
                    </Flex>
                </Box>

                <Box
                    display={"flex"}
                    flexDirection={{ base: 'row' }}
                    justifyContent={{ base: 'space-between' }}
                    alignItems={{ base: 'center' }}
                >
                    <Text fontSize={"12px"}>© {new Date().getFullYear()} Nox Creations. All rights reserved</Text>
                    <Stack direction={'row'} spacing={6}>
                        <SocialButton label={'Instagram'} href={'#'}>
                            <FaInstagram color='#949494' />
                        </SocialButton>
                        <SocialButton label={'Twitter'} href={'#'}>
                            <FaXTwitter color='#949494' />
                        </SocialButton>
                        <SocialButton label={'YouTube'} href={'#'}>
                            <FaYoutube color='#949494' />
                        </SocialButton>
                    </Stack>
                </Box>
            </Box>
        </footer>
    )
}
