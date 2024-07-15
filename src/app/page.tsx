import Welcome from "@/components/sections/Welcome";
import Service from "@/components/sections/Service";
import Steps from "@/components/sections/Steps";
import Team from "@/components/sections/Team";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Welcome />
      <Service />
      <Steps />
      <Team />
    </main>
  );
}