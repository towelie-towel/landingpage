"use client"
import { Flex, Image, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function BackToTop() {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 100 && !hasScrolled) {
                setHasScrolled(true);
            } else if (window.scrollY < 100 && hasScrolled) {
                setHasScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [hasScrolled]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Flex>
            <Flex
                opacity={hasScrolled ? 1 : 0}
                position={"fixed"}
                bottom={20}
                right={"5%"}
                zIndex={80}
                transition={"all 0.5s"}
            >
                <Button
                    onClick={scrollToTop}
                    w={"50px"}
                    h={"50px"}
                    borderRadius={"50%"}
                    backgroundColor={"green.200"}
                    boxShadow={"0 20px 50px #5c5c5c3b"}
                    fontSize={"18px"}
                    px={4}
                    minW={4}
                    transition={"all 0.5s"}
                    _hover={{
                        filter: "brightness(0.9)",
                        boxShadow: "0 20px 20px #5c5c5c3b",
                    }}
                    _active={{
                        transform: "scale(0.97)",
                    }}
                >
                    <Image src="/arrow_up.svg" />
                </Button>
            </Flex>
        </Flex>
    );
}
