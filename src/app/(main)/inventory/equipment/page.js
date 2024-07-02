import Header from "@/app/components/organisms/header/Header";
import Sidebar from "@/app/components/organisms/sidebar/Sidebar";
import InventoryAll from "@/app/components/organisms/inventory/equipment/Equipment";

export default function Home() {
  return (
    <main>
      <Header />
      <Sidebar />
      <InventoryAll />
    </main>
  );
}
