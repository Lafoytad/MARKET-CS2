import styles from "./page.module.scss";
import Header from "@/app/components/organisms/header/Header";
import Panel from "@/app/components/organisms/panel/Panel";
import Sidebar from "@/app/components/organisms/sidebar/Sidebar";

export default function Home() {
  return (
    <main>
      <Header />
      <Panel />
      <Sidebar />
    </main>
  );
}
