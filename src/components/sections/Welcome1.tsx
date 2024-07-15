'use client'
import { Box, Container, Flex, VStack, Heading, Text, Button, Image, Link as ChakraLink, useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';

const Welcome = () => {
    return (
        <Box width={"100%"} position="relative" className="headerh5bg">
            <Image
                src='/assets/images/elementor/elementor36.png'
                alt=''
                position="absolute"
                className="elementor-12 aniamtion-key-1"
            />
            <Container maxW="container.xl" px={{ base: "25px", xl: "0px" }}>
                <Flex direction={{ base: 'column', lg: 'row' }} align="center">
                    <VStack
                        align="start"
                        spacing={6}
                        flex={1}
                    >
                        <Text
                            as="span"
                            fontSize="16px"
                            lineHeight="16px"
                            fontWeight={600}
                            color="blue.500"
                            display="inline-block"
                        >
                            Trusted Financial Consulting Services
                        </Text>
                        <Heading
                            as="h1"
                            fontSize={{ base: '40px', md: '60px' }}
                            lineHeight={{ base: '48px', md: '64px' }}
                            fontWeight={600}
                            color="gray.800"
                        >
                            Your Best Finance Consulting Partners
                        </Heading>
                        <Text fontSize="16px" lineHeight="26px" fontWeight={500} color="gray.600">
                            Our consultants bring diverse financial backgrounds, ensuring
                            seasoned and practical advice. We develop solutions that align
                            with your unique.
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
                    <Box flex={1} position="relative">
                        <Image
                            src='/assets/images/sectionimg/welcome6img1.png'
                            alt=''
                        />
                    </Box>
                </Flex>
            </Container>
            <Image
                src='/assets/images/elementor/elementor37.png'
                alt=''
                position="absolute"
                bottom="0"
                left="0"
            />
            <Image
                src='/assets/images/elementor/elementor38.png'
                alt=''
                position="absolute"
                bottom="0"
                right="0"
            />
        </Box>
    );
};

export default Welcome;