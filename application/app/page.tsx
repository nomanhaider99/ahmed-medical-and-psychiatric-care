import Footer from "@/components/layouts/footer";
import Navbar from "@/components/layouts/navbar";
import TopHeader from "@/components/layouts/top-header";
import Description from "@/components/widgets/description";
import FAQs from "@/components/widgets/faqs";
import Hero from "@/components/widgets/hero";
import Team from "@/components/widgets/team";
import Testimonials from "@/components/widgets/testimonials";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-between">
      <div>
        <TopHeader />
        <Navbar />
      </div>
      <Hero />
      <Description />
      <Team />
      <Testimonials />
      <FAQs />
      <Footer />
    </main>
  );
}
