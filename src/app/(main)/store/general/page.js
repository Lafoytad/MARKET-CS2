import Header from "@/app/components/organisms/header/Header";
import Sidebar from "@/app/components/organisms/sidebar/Sidebar";
import StoreGeneral from "@/app/components/organisms/store/general/General";

export default function Home() {
  return (
    <main>
      <Header />
      <Sidebar />
      <StoreGeneral />
    </main>
  );
}
