'use client'
import { Box, Flex, Text, Badge, Heading, Image } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import { blogs } from '@/components/sections/Blog';

const Article = ({ slug, prev = false }: { slug: string, prev?: boolean }) => {
    console.log(prev)

    const blogArticle = blogs.find(blog => blog.slug === slug)

    if (!blogArticle) {
        return null;
    }

    return (
        <Flex
            as='section'
            gap={"40px"}
            px={{ base: "25px", md: "112px" }}
            pt={10}
            pb={{ base: "50px", md: "96px" }}
            flexDir={"column"}
        >
            <Box>
                <Flex
                    flexDirection={"column"}
                    width={"auto"}
                    gap={8}
                >
                    <Box
                        height={{ base: "200px", md: "530px" }}
                        position="relative"
                        overflow="hidden"
                        style={{
                            viewTransitionName: prev ? `blog-img-prev-${blogArticle?.slug}` : `blog-img-${blogArticle?.slug}`
                        }}
                    >
                        <Image
                            src={blogArticle?.img}
                            alt={blogArticle?.title || "Blog article image"}
                            objectFit="cover"
                            width={"-webkit-fill-available"}
                        />
                    </Box>

                    <Flex >
                        <Flex
                            flexDirection={"column"}
                            gap={2}
                        >
                            <Text fontSize={"30px"} fontWeight={600} color={"black"} fontFamily={"heading"} lineHeight={{ base: '1.33', md: '1.2' }}>{blogArticle.title}</Text>
                            <Text fontSize={"14px"} fontWeight={600} color={"primary.600"}>{blogArticle.author} • {new Date(blogArticle.datetime).toLocaleDateString()}, {new Date(blogArticle.datetime).toLocaleTimeString()}</Text>
                        </Flex>
                        <Flex
                            alignItems={"center"}
                            justifyContent={"center"}
                            flex={1}
                        >
                            <Flex
                                gap={3}
                                flexWrap={"wrap"}
                            >
                                {
                                    blogArticle.tags.map(tag => (
                                        <Badge key={tag} textTransform={"none"} px={1} fontSize={"14px"} fontWeight={"bold"} color={"primary.200"} borderRadius={"20px"} p={"3px 15px"}>{tag}</Badge>
                                    ))
                                }
                            </Flex>
                        </Flex>
                    </Flex>

                    <Box
                        as='span'
                        color={"#7B7B7B"}
                        fontSize="18px"
                        fontWeight={100}
                        height="auto"
                    >
                        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{blogArticle.html}</ReactMarkdown>
                    </Box>
                </Flex>
            </Box>

            <Flex
                flexDir={"column"}
                gap={"40px"}
            >
                <Flex
                    mt={"50px"}
                >
                    <Heading
                        as="h1"
                        fontSize={"24px"}
                        lineHeight={{ base: '1.33', md: '1.2' }}
                        fontWeight={"bold"}
                        fontFamily={"heading"}
                    >
                        Artículos Realacionados
                    </Heading>
                </Flex>

                <Flex>
                    <Flex
                        gap={"40px"}
                        flexDir={{ md: "row" }}
                        flexFlow={"column wrap"}
                    >
                        {
                            blogs.slice(0, 2).map((blog, i) => (
                                <Flex
                                    key={i}
                                    as={"a"}
                                    href={`/blog/${blog.slug}`}
                                    w={{ base: "100%", md: "calc(-114.667px + 33.3333vw)" }}
                                    gap={8}
                                    cursor={"pointer"}
                                    flexDirection={"column"}
                                    transition={"all 0.5s ease 0s"}
                                    _hover={{
                                        transform: "scale(1.05)",
                                        transition: "all 0.5s ease 0s"
                                    }}
                                >
                                    <Box
                                        display={"flex"}
                                        height={"200px"}
                                        w={{ base: "100%", md: "calc(-114.667px + 33.3333vw)" }}
                                        width={"auto"}
                                        position={"relative"}
                                        overflow={"hidden"}
                                    /* style={{
                                        viewTransitionName: `blog-img-${blog.slug}`
                                    }} */
                                    >
                                        <Image
                                            src={blog.img}
                                            alt={blog.title || "Blog article image"}
                                            objectFit="cover"
                                            width={"-webkit-fill-available"}
                                        />
                                    </Box>

                                    <Flex
                                        flexDirection={"column"}
                                        gap={4}
                                    >
                                        <Flex
                                            gap={2}
                                            flexDirection={"column"}
                                        >
                                            <Text fontSize={"14px"} fontWeight={600} color={"primary.600"}>{blog.author} • {new Date(blog.datetime).toLocaleDateString()}, {new Date(blog.datetime).toLocaleTimeString()}</Text>
                                            <Text fontSize={"24px"} fontWeight={600} color={"black"}>{blog.title}</Text>
                                            <Text fontSize={"16px"} fontWeight={400} height={"95px"} overflow={"hidden"} color={"rgb(123, 123, 123)"}>{blog.description}</Text>
                                        </Flex>
                                        <Flex gap={3} flexWrap={"wrap"}>
                                            {
                                                blog.tags.map(tag => (
                                                    <Badge key={tag} textTransform={"none"} px={1} fontSize={"14px"} fontWeight={"bold"} color={"primary.200"} borderRadius={"20px"} p={"3px 15px"}>{tag}</Badge>
                                                ))
                                            }
                                        </Flex>
                                    </Flex>
                                </Flex>
                            ))
                        }
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Article;