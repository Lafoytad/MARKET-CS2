import Header from "@/app/components/organisms/header/Header";
import Sidebar from "@/app/components/organisms/sidebar/Sidebar";
import Copenhagen from "@/app/components/organisms/store/copenhagen/Copenhagen";

export default function Home() {
  return (
    <main>
      <Header />
      <Sidebar />
      <Copenhagen />
    </main>
  );
}
