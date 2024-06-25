import Header from "@/app/components/organisms/header/Header";
import Sidebar from "@/app/components/organisms/sidebar/Sidebar";
import InventoryAll from "@/app/components/organisms/inventory/all/All";

export default function Home() {
  return (
    <main>
      <Header />
      <Sidebar />
      <InventoryAll />
    </main>
  );
}
