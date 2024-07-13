'use client'

import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react'
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
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}
            px={{ base: "25px", lg: "112px" }}
            pt={10}
            pb={5}
        >
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
    )
}