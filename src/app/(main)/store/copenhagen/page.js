import Header from "@/app/components/organisms/header/Header";
import Sidebar from "@/app/components/organisms/sidebar/Sidebar";
import StoreCopenhagen from "@/app/components/organisms/store/copenhagen/copenhagen";

export default function Home() {
  return (
    <main>
      <Header />
      <Sidebar />
      <StoreCopenhagen />
    </main>
  );
}
