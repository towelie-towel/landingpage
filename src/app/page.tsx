import { Flex } from "@chakra-ui/react";

import Welcome from "@/components/sections/Welcome";
import Service from "@/components/sections/Service";
import Steps from "@/components/sections/Steps";
import Team from "@/components/sections/Team";
import Works from "@/components/sections/Works";
import Comments from "@/components/sections/Comments";
import Contact from "@/components/sections/Contact";
import BackToTop from "@/components/containers/BackToTop";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomePage() {
  return (
    <Flex as={"main"} flexDirection={"column"} justifyContent={"space-between"} alignItems={"center"} minHeight={"100vh"}>
      <Welcome />
      <Service />
      <Steps />
      <Team />
      <Works />
      <Comments />
      <Contact />

      <BackToTop />
    </Flex>
  );
}