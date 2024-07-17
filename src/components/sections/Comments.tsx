'use client'
import { Flex, VStack, Heading, Text, Image, Button, Box } from '@chakra-ui/react';
import { useState } from 'react';
import CommentsCarousel from '../containers/CommentsCarousel';

const comments = [
]

const Comments = () => {

    return (
        <Flex
            w={"100%"}
            as='section'
            flexDirection={"column"}
            px={{ base: "25px", md: "112px" }}
            py={{ base: "50px", md: "96px" }}
            gap={"50px"}
        >
            <Flex
                flexDirection={"column"}
                gap={"50px"}
                width={"100%"}
            >
                <VStack
                    align="center"
                    gap={2}
                >
                    <Heading
                        as="h1"
                        fontSize={{ base: '25px', sm: "20px", md: '35px' }}
                        lineHeight={{ base: '1.33', md: '1.2' }}
                        fontWeight={"bold"}
                        fontFamily={"heading"}
                    >
                        Nuestros Clientes Hablan
                    </Heading>
                    <Text fontSize={{ base: "13px", md: "16px" }} textAlign={"center"}>
                        Hemos pedido algunos de nuestros clientes que emitan su valoración y estos son sus comentarios
                    </Text>
                </VStack>
                <Flex
                    flexDirection={"column"}
                    gap={"50px"}
                    width={"100%"}
                >
                    <CommentsCarousel />
                </Flex>
                <Button
                    alignSelf={"center"}
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
                    Agregar mi comentario
                </Button>
            </Flex>
        </Flex>
    );
};

export default Comments;