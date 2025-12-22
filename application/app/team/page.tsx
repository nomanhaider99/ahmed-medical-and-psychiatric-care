import Footer from "@/components/layouts/footer"
import Navbar from "@/components/layouts/navbar"
import TopHeader from "@/components/layouts/top-header"
import Team from "@/components/widgets/team"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Our Team | Ahmed Medical Psychiatric Care',
  description: 'Our team at Ahmed Medical & Psychiatric Care is composed of experienced psychiatrists and therapists dedicated to helping you achieve meaningful, measurable improvements in your mental health.',
}

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