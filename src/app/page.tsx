import Welcome from "@/components/sections/Welcome";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Welcome />
    </main>
  );
}