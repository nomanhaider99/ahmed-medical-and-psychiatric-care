import Footer from "@/components/layouts/footer";
import Navbar from "@/components/layouts/navbar";
import TopHeader from "@/components/layouts/top-header";
import Hero from "@/components/widgets/hero";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-between">
      <div>
        <TopHeader />
        <Navbar />
      </div>
      <Hero />
      <Footer />
    </main>
  );
}
