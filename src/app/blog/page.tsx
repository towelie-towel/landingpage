import { Flex } from "@chakra-ui/react";

import Blog from "@/components/sections/Blog";
import BackToTop from "@/components/containers/BackToTop";

export default function Home() {
    return (
        <Flex as={"main"} flexDirection={"column"} justifyContent={"space-between"} alignItems={"center"} minHeight={"100vh"}>
            <Blog />

            <BackToTop />
        </Flex>
    );
}