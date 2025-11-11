import Footer from "@/components/layouts/footer"
import Navbar from "@/components/layouts/navbar"
import TopHeader from "@/components/layouts/top-header"
import Team from "@/components/widgets/team"

const Page = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
        <div>
            <TopHeader />
            <Navbar />
        </div>
        <Team />
        <Footer />
    </div>
  )
}

export default Page