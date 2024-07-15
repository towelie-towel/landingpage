'use client'
import { Box, Flex, Heading, Text, Button, Image, Link, VStack, HStack, Container, useBreakpointValue } from '@chakra-ui/react'

export default function Welcome() {
    return (
        <Box as="section" py={16}>
            <Container maxW="container.xl">
                <Flex direction={{ base: 'column', lg: 'row' }} align="center">
                    <Box flex={1} mb={{ base: 10, lg: 0 }} data-aos="fade-left" data-aos-duration={1000}>
                        <VStack align="start" spacing={6}>
                            <Heading as="h1" fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} lineHeight={1.2} fontWeight={600}>
                                Consult - Law, Finance, Tax, Visa, Business Consulting HTML Template
                            </Heading>
                            <Text fontSize="md" lineHeight={1.6}>
                                The theme often features a clean, professional, and corporate design to instill trust and credibility in visitors.
                            </Text>
                            <HStack spacing={8} align="start">
                                <VStack align="start" spacing={3}>
                                    <HStack>
                                        <Image src="/assets/images/icons/preview-check.svg" alt="" boxSize="20px" />
                                        <Text fontWeight={500}>Clean & Unique Design</Text>
                                    </HStack>
                                    <HStack>
                                        <Image src="/assets/images/icons/preview-check.svg" alt="" boxSize="20px" />
                                        <Text fontWeight={500}>Well Documented</Text>
                                    </HStack>
                                </VStack>
                                <VStack align="start" spacing={3}>
                                    <HStack>
                                        <Image src="/assets/images/icons/preview-check.svg" alt="" boxSize="20px" />
                                        <Text fontWeight={500}>Responsive & Mobile Friendly</Text>
                                    </HStack>
                                    <HStack>
                                        <Image src="/assets/images/icons/preview-check.svg" alt="" boxSize="20px" />
                                        <Text fontWeight={500}>Valid HTML5 & CSS3</Text>
                                    </HStack>
                                </VStack>
                            </HStack>
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
                    </Box>
                    <Box flex={1} data-aos="fade-right" data-aos-duration={1200}>
                        <Image src="/assets/images/alldemo/previewimges2.png" alt="" w="full" />
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}
