import styles from "./page.module.scss";
import Header from "@/app/components/organisms/header/Header";
import Sidebar from "@/app/components/organisms/sidebar/Sidebar";
import News from "@/app/components/organisms/news/News";

export default function Home() {
  return (
    <main>
      <Header />
      <Sidebar />
      <News />
    </main>
  );
}
