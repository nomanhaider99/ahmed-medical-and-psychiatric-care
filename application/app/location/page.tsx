import Footer from "@/components/layouts/footer"
import Navbar from "@/components/layouts/navbar"
import TopHeader from "@/components/layouts/top-header"

const Page = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
        <div>
            <TopHeader />
            <Navbar />
        </div>
        <div className="w-full h-[200px] flex justify-center items-center text-3xl py-5">Page Under Construction </div>
        <Footer />
    </div>
  )
}

export default Page