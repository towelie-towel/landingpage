import Welcome from "@/components/sections/Welcome";
import Service from "@/components/sections/Service";
import Steps from "@/components/sections/Steps";
import Team from "@/components/sections/Team";
import Works from "@/components/sections/Works";
import Comments from "@/components/sections/Comments";

import styles from "./page.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Welcome />
      <Service />
      <Steps />
      <Team />
      <Works />
      <Comments />
    </main>
  );
}