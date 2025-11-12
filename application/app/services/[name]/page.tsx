import Footer from "@/components/layouts/footer";
import Navbar from "@/components/layouts/navbar";
import TopHeader from "@/components/layouts/top-header";
import DetailedService from "@/components/ui/detailed-service";
import { detailedServicesData } from "@/data/services";

export default async function Page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  const data = detailedServicesData.find((item) =>
    item.route.includes(name)
  );

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600 text-xl">
        Service not found.
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col ">
      <div>
        <TopHeader />
        <Navbar />
      </div>
      <div className="pb-10">
        <DetailedService data={data} />
      </div>
      <Footer />
    </div>
  );
}
