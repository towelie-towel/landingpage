import { Flex } from "@chakra-ui/react";

import Article from "@/components/sections/Article";
import BackToTop from "@/components/containers/BackToTop";

export default function BlogArticlePage({
    params,
    searchParams,
}: {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
}) {

    return (
        <Flex as={"main"} flexDirection={"column"} justifyContent={"space-between"} alignItems={"center"} minHeight={"100vh"}>
            <Article slug={params.slug} prev={searchParams && searchParams["prev"] === "true"} />

            <BackToTop />
        </Flex>
    );
}