import Header from "@/app/components/organisms/header/Header";
import Sidebar from "@/app/components/organisms/sidebar/Sidebar";
import StoreMarket from "@/app/components/organisms/store/market/Market";

export default function Home() {
  return (
    <main>
      <Header />
      <Sidebar />
      <StoreMarket />
    </main>
  );
}
