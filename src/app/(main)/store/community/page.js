import Header from "@/app/components/organisms/header/Header";
import Sidebar from "@/app/components/organisms/sidebar/Sidebar";
import StoreCommunity from "@/app/components/organisms/store/community/Community";

export default function Home() {
  return (
    <main>
      <Header />
      <Sidebar />
      <StoreCommunity />
    </main>
  );
}
