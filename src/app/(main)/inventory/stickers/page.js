import Header from "@/app/components/organisms/header/Header";
import Sidebar from "@/app/components/organisms/sidebar/Sidebar";
import InventoryStickers from "@/app/components/organisms/inventory/stickers/Stickers";

export default function Home() {
  return (
    <main>
      <Header />
      <Sidebar />
      <InventoryStickers />
    </main>
  );
}
