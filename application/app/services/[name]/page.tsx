import Footer from "@/components/layouts/footer";
import Navbar from "@/components/layouts/navbar";
import TopHeader from "@/components/layouts/top-header";
import DetailedService from "@/components/ui/detailed-service";

export default async function Page({
  params,
}: {
  params: Promise<{ name: string }>
}) {
  const { name } = await params;
  return (
    <div className="w-full flex flex-col">
      <div>
        <TopHeader />
        <Navbar />
      </div>
      <DetailedService />
      <Footer />
    </div>
  )
}