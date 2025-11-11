import Footer from "@/components/layouts/footer"
import Navbar from "@/components/layouts/navbar"
import TopHeader from "@/components/layouts/top-header"
import FAQs from "@/components/widgets/faqs"

const Page = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
        <div>
            <TopHeader />
            <Navbar />
        </div>
        <FAQs />
        <Footer />
    </div>
  )
}

export default Page