import { Flex } from "@chakra-ui/react";

import Article from "@/components/sections/Article";
import BackToTop from "@/components/containers/BackToTop";

export default function Home({ params }: { params: { slug: string } }) {
    return (
        <Flex as={"main"} flexDirection={"column"} justifyContent={"space-between"} alignItems={"center"} minHeight={"100vh"}>
            <Article slug={params.slug} />

            <BackToTop />
        </Flex>
    );
}