import Header from "@/app/components/organisms/header/Header";
import Sidebar from "@/app/components/organisms/sidebar/Sidebar";
import InventoryСases from "@/app/components/organisms/inventory/cases/Cases";

export default function Home() {
  return (
    <main>
      <Header />
      <Sidebar />
      <InventoryСases />
    </main>
  );
}
