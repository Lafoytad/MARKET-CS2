// import styles from "./page.module.scss";
import Header from "@/app/components/organisms/header/Header";
import Sidebar from "@/app/components/organisms/sidebar/Sidebar";
import StoreHome from "@/app/components/organisms/store/home/Home";

export default function Home() {
  return (
    <main>
      <Header />
      <Sidebar />
      <StoreHome />
    </main>
  );
}
