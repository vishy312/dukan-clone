import Footer from "./components/footer";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full flex flex-col">
        <Header />
        <div className="grow border-y border-y-neutral-200"></div>
        <Footer />
      </div>
    </div>
  );
}
